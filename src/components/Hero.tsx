"use client";

import HeroStage from "@/components/HeroStage";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="hero labs-hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Qiko Labs</p>
          <h1 className="hero-title">
            <span className="hero-mask">
              <span className="hero-mask-inner">Pulse for B2B teams.</span>
            </span>
            <span className="hero-mask">
              <span className="hero-mask-inner accent">Built where Signal stops.</span>
            </span>
          </h1>
          <p className="hero-sub">
            The home for Pulse — AI intelligence on your CRM and operations —
            and custom AI workers when you need something bespoke. Signal stays
            on AI visibility at qiko.ai.
          </p>
          <div className="hero-ctas">
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a demo
              <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
            </a>
            <a href="/contact" className="btn btn-outline">
              Enquire
              <img
                src="/qiko-static/assets/icons/arrow-white.svg"
                className="arrow-purple"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="hero-visual labs-hero-visual">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
