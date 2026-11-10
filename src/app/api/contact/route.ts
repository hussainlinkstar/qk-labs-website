import { NextRequest, NextResponse } from "next/server";
import { COMPANY_SIZE_OPTIONS } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SIZES = new Set<string>(COMPANY_SIZE_OPTIONS);
const UPSTREAM_TIMEOUT_MS = 15000;

function readString(body: Record<string, unknown>, key: string, max: number): string {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function fail(status: number, message: string) {
  return NextResponse.json(
    { success: false, message },
    { status, headers: { "cache-control": "no-store" } }
  );
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail(400, "Invalid request body.");
  }

  const name = readString(body, "name", 120);
  const workEmail = readString(body, "work_email", 254);
  const company = readString(body, "company", 160);
  const companySize = readString(body, "company_size", 80);
  const message = readString(body, "message", 4000);

  if (!name || name.length < 2 || !EMAIL_RE.test(workEmail) || !company || !SIZES.has(companySize) || !message) {
    return fail(
      400,
      "Please provide your name, work email, company, company size, and a short message."
    );
  }

  const payload = {
    name,
    work_email: workEmail,
    company,
    company_size: companySize,
    build_request: message,
  };

  const appBase = process.env.NEXT_PUBLIC_APP_BASE_URL?.trim().replace(/\/+$/, "");

  if (appBase) {
    try {
      const upstream = await fetch(`${appBase}/api/v1/marketing/labs-contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      });

      if (upstream.status === 200) {
        return NextResponse.json(
          { success: true, message: "Thanks - your message was sent to Qiko Labs." },
          { headers: { "cache-control": "no-store" } }
        );
      }

      if (upstream.status === 400) {
        const detail = (await upstream.json().catch(() => null)) as { detail?: string } | null;
        return fail(
          400,
          detail?.detail
            ? `Some details were not accepted: ${detail.detail}.`
            : "Some details were not accepted. Please check the form and try again."
        );
      }

      return fail(502, "The contact form is temporarily unavailable. Please try again shortly.");
    } catch {
      return fail(502, "The contact form is temporarily unavailable. Please try again shortly.");
    }
  }

  console.info("[labs-contact]", { ...payload, receivedAt: new Date().toISOString() });
  return NextResponse.json(
    { success: true, message: "Thanks - your message was sent to Qiko Labs." },
    { headers: { "cache-control": "no-store" } }
  );
}
