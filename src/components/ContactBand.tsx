import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export default function ContactBand() {
  return (
    <section className="section contact-section" id="enquire">
      <div className="section-inner contact-grid">
        <div className="contact-copy">
          <p className="how-eyebrow">Get started</p>
          <h2>Book a demo or send an enquiry</h2>
          <p>
            Schedule time for Pulse, or tell us about a custom AI worker. Signal visibility questions
            still belong on{" "}
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
  );
}
