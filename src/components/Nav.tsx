"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
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

  const homeHash = (hash: string) => (isHome ? hash : `/${hash}`);

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
              <li>{link("/", "Home", isHome)}</li>
              <li>{link(homeHash("#see"), "Insights")}</li>
              <li>{link(homeHash("#path"), "How it works")}</li>
              <li>{link(homeHash("#build-how"), "Workers")}</li>
              <li>{link(homeHash("#products"), "Products")}</li>
              <li>{link("/contact", "Contact", isContact)}</li>
              <li>
                <a href={siteConfig.signalUrl} className="nav-link" rel="noopener noreferrer">
                  Signal
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href={isHome ? "#enquire" : "/#enquire"} className="link-plain">
              Enquire
            </a>
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-tab"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a demo
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
        {link("/", "Home", isHome)}
        {link(homeHash("#see"), "Insights")}
        {link(homeHash("#path"), "How it works")}
        {link(homeHash("#build-how"), "Workers")}
        {link(homeHash("#products"), "Products")}
        {link("/contact", "Contact", isContact)}
        <a
          href={siteConfig.signalUrl}
          className="nav-link"
          rel="noopener noreferrer"
          onClick={closeMobile}
        >
          Signal
        </a>
        <hr />
        <a
          href={isHome ? "#enquire" : "/#enquire"}
          className="link-plain"
          onClick={closeMobile}
        >
          Enquire
        </a>
        <a
          href={siteConfig.calendlyUrl}
          className="btn btn-tab btn-block"
          rel="noopener noreferrer"
          target="_blank"
          onClick={closeMobile}
        >
          Book a demo
        </a>
      </nav>
    </header>
  );
}
