import { NextRequest, NextResponse } from "next/server";
import { COMPANY_SIZE_OPTIONS } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?\d+$/;
const SIZES = new Set<string>(COMPANY_SIZE_OPTIONS);

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

  const companyName = readString(body, "company_name", 160);
  const contactName = readString(body, "contact_name", 120);
  const email = readString(body, "email", 254);
  const phone = readString(body, "phone", 40);
  const companySize = readString(body, "company_size", 80);
  const budgetRange = readString(body, "budget_range", 120);
  const requirements = readString(body, "requirements", 4000);

  if (
    !companyName ||
    !contactName ||
    !EMAIL_RE.test(email) ||
    !PHONE_RE.test(phone) ||
    !SIZES.has(companySize) ||
    !budgetRange ||
    !requirements
  ) {
    return fail(400, "Please complete all required enterprise fields.");
  }

  const payload = {
    company_name: companyName,
    contact_name: contactName,
    email,
    phone,
    company_size: companySize,
    budget_range: budgetRange,
    requirements,
  };

  console.info("[enterprise]", { ...payload, receivedAt: new Date().toISOString() });

  return NextResponse.json(
    { success: true, message: "Thanks — your enterprise enquiry was received." },
    { headers: { "cache-control": "no-store" } }
  );
}
