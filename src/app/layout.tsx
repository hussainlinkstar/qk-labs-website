import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteBaseUrl } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Qiko Labs — Pulse and custom AI for B2B teams",
    template: "%s | Qiko Labs",
  },
  description:
    "Qiko Labs builds Pulse and custom AI workers — mobilise agent squads, test with real customers, harden, and embed into production workflows.",
  icons: {
    icon: [
      { url: "/qiko-static/assets/icons/favicon.png", sizes: "128x128", type: "image/png" },
      { url: "/qiko-static/assets/icons/qiko-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/qiko-static/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Qiko Labs",
    title: "Qiko Labs — Pulse and custom AI for B2B teams",
    description:
      "Prototypes don't ship. We do. Pulse on CRM plus custom AI workers built, tested, and embedded by Labs.",
    images: [{ url: "/qiko-static/assets/og-qiko.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiko Labs — Pulse and custom AI for B2B teams",
    description:
      "Prototypes don't ship. We do. Pulse on CRM plus custom AI workers built, tested, and embedded by Labs.",
    images: ["/qiko-static/assets/og-qiko.png"],
  },
  robots: process.env.SITE_NOINDEX === "true" ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, background: "#ffffff" }}>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
