import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SiteMotion from "@/components/SiteMotion";
import { getSiteBaseUrl, siteConfig } from "@/lib/site-config";

const title = "Contact Qiko Labs | Pulse and custom AI builds";
const description =
  "Book a Pulse demo or enquire about a custom AI worker. Signal visibility stays on qiko.ai.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteBaseUrl()}/contact` },
  openGraph: {
    title,
    description,
    url: `${getSiteBaseUrl()}/contact`,
  },
};

export default function ContactPage() {
  return (
    <SiteMotion>
      <Nav />
      <main id="main">
        <section className="hero blog-hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="reveal">
            <span className="how-eyebrow">Contact</span>
            <h1 className="hero-title">Talk to Qiko Labs</h1>
            <p className="hero-sub">
              Book a demo for Pulse, or send an enquiry about a custom AI worker.
            </p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-inner contact-grid">
            <div className="contact-copy">
              <h2>Book a demo or enquire</h2>
              <p>
                Prefer a live walkthrough? Schedule on Calendly. Prefer email? Use the form —
                Signal questions still go to{" "}
                <a href={siteConfig.signalUrl} rel="noopener noreferrer">
                  qiko.ai
                </a>
                .
              </p>
              <a
                href={siteConfig.calendlyUrl}
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Book a demo
                <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
              </a>
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SiteMotion>
  );
}
