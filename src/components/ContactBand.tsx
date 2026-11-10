import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export default function ContactBand() {
  return (
    <section className="section contact-section" id="enquire">
      <div className="section-inner contact-grid">
        <div className="contact-copy">
          <p className="how-eyebrow">Talk to Labs</p>
          <h2>Start a Labs build</h2>
          <p>
            Tell us what you want to build, the systems involved, and the outcome you need. Book a
            demo for Pulse, or send an enquiry for a custom worker.
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
