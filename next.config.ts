import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  isDev ? "connect-src 'self' ws: wss: http: https:" : "connect-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https:",
  // Dev webpack needs unsafe-eval; without it client JS never hydrates.
  isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com"
    : "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "frame-src 'self' https://calendly.com https://www.calendly.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    const securityHeaders = [
      { key: "Content-Security-Policy", value: contentSecurityPolicy },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];
    if (process.env.SITE_NOINDEX === "true") {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex" });
    }
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
