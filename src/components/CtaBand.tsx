import { siteConfig } from "@/lib/site-config";

export default function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="section-inner reveal">
        <div className="cta-panel">
          <div className="cta-panel-inner cta-panel-inner--simple">
            <div className="cta-copy">
              <h3>Ready to ship with Labs?</h3>
              <p>
                Book a call for Pulse on CRM, or start a custom AI worker build with real-customer
                validation baked in.
              </p>
            </div>
            <div className="cta-buttons">
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
        </div>
      </div>
    </section>
  );
}
