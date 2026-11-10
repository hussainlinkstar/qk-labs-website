import type { MetadataRoute } from "next";
import { getSiteBaseUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteBaseUrl();
  const noindex = process.env.SITE_NOINDEX === "true";

  if (noindex) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
