"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  const link = (href: string, text: string, active = false) => (
    <a
      href={href}
      className={`nav-link${active ? " active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={closeMobile}
    >
      {text}
    </a>
  );

  return (
    <header className={`site-header${mobileMenuOpen ? " is-mobile-open" : ""}`} id="site-header">
      <div className="header-top-bar" />
      <div className="header-inner">
        <div className="header-container">
          <a href="/" className="logo" aria-label="Qiko Labs home" onClick={closeMobile}>
            <img src="/qiko-static/assets/qiko-logo.png" alt="Qiko" width="92" height="37" />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              {PAGE_LINKS.map((item) => (
                <li key={item.href}>{link(item.href, item.label, pathname === item.href)}</li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a href={isHome ? "#enquire" : "/contact"} className="link-plain">
              Talk to Labs
            </a>
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-tab"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </a>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`mobile-nav-backdrop${mobileMenuOpen ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
        onClick={closeMobile}
      />
      <nav
        className={`mobile-nav${mobileMenuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        {PAGE_LINKS.map((item) => link(item.href, item.label, pathname === item.href))}
        <hr />
        <a href={isHome ? "#enquire" : "/contact"} className="link-plain" onClick={closeMobile}>
          Talk to Labs
        </a>
        <a
          href={siteConfig.calendlyUrl}
          className="btn btn-tab btn-block"
          rel="noopener noreferrer"
          target="_blank"
          onClick={closeMobile}
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
