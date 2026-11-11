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
              <span className="hero-mask-inner">Prototypes don&apos;t ship.</span>
            </span>
            <span className="hero-mask">
              <span className="hero-mask-inner accent">We do.</span>
            </span>
          </h1>
          <p className="hero-sub">
            Our orchestrator mobilises a squad of digital agents to build at AI-native speed.
            Labs takes it to real customers, feeds tickets back in, and embeds native AI workers
            into the workflows that need them — including Pulse on your CRM.
          </p>
          <div className="hero-ctas">
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
              <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
            </a>
            <a href="/#enquire" className="btn btn-outline">
              Talk to Labs
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
