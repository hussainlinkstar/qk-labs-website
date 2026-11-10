function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export function getSiteBaseUrl(): string {
  return trimTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://qikolabs.com"
  );
}

export function getSignalSiteUrl(): string {
  return trimTrailingSlash(
    process.env.NEXT_PUBLIC_SIGNAL_SITE_URL?.trim() || "https://qiko.ai"
  );
}

export function getCalendlyUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com"
  );
}

export const siteConfig = {
  name: "Qiko Labs",
  tagline: "B2B AI for teams that need Pulse — and custom builds when the product is not enough.",
  calendlyUrl: getCalendlyUrl(),
  signalUrl: getSignalSiteUrl(),
  signalLabsPath: `${getSignalSiteUrl()}/labs`,
  revealAnimations: true,
};
