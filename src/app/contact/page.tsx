import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SiteMotion from "@/components/SiteMotion";
import { getSiteBaseUrl, siteConfig } from "@/lib/site-config";

const title = "Contact Qiko Labs | Pulse and custom AI builds";
const description =
  "Book a Pulse demo or start a Labs build — tell us the systems involved and the outcome you need.";

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
            <span className="how-eyebrow">Talk to Labs</span>
            <h1 className="hero-title">Start a Labs build</h1>
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
                Prefer a live walkthrough? Schedule on Calendly. Prefer email? Use the form and tell
                us what you want to build.
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
