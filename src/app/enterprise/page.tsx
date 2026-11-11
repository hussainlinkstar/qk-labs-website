import type { Metadata } from "next";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import EnterpriseForm from "@/components/EnterpriseForm";
import InnerPageShell from "@/components/InnerPageShell";
import { caseStudies, enterpriseProofPoints } from "@/lib/case-studies";
import { enterpriseServices } from "@/lib/inner-pages";
import { getSiteBaseUrl, siteConfig } from "@/lib/site-config";

const title = "Enterprise | Qiko Labs";
const description =
  "Enterprise digital workers with custom training, private deployment options, dedicated Labs support, and client case studies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteBaseUrl()}/enterprise` },
  openGraph: { title, description, url: `${getSiteBaseUrl()}/enterprise` },
};

export default function EnterprisePage() {
  return (
    <InnerPageShell
      eyebrow="Enterprise"
      title="Enterprise digital workers that ship"
      sub="Custom models, dedicated implementation, private deployment, and IP ownership — backed by Labs builds that already went live with real customers."
    >
      <section className="section enterprise-proof-section" id="proof">
        <div className="section-inner reveal">
          <div className="section-head">
            <p className="how-eyebrow">Why enterprise teams call Labs</p>
            <h2>Built for compliance, ownership, and go-live.</h2>
            <p>
              Not another pilot that stalls. Enterprise engagements come with clear ownership,
              deployment choices, and a named Labs team through production.
            </p>
          </div>
          <div className="enterprise-proof-grid" data-stagger-group>
            {enterpriseProofPoints.map((item) => (
              <article key={item.label} className="enterprise-proof-card reveal-item">
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <div className="enterprise-proof-cta">
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
              <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
            </a>
            <a href="#get-started" className="btn btn-outline">
              Send an enterprise brief
              <img
                src="/qiko-static/assets/icons/arrow-white.svg"
                className="arrow-purple"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-inner reveal">
          <div className="section-head">
            <p className="how-eyebrow">Capabilities</p>
            <h2>What enterprise engagements include.</h2>
          </div>
          <div className="handles-grid handles-grid--four" data-stagger-group>
            {enterpriseServices.map((item) => (
              <article key={item.title} className="handles-card reveal-item">
                <div className="handles-icon" aria-hidden="true">
                  <img src={item.icon} alt="" width={28} height={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection
        eyebrow="Client case studies"
        title="Real Labs builds. Real outcomes."
        description="Use these as conversation starters on the call — Joseph Mews, creator packaging, and a Pulse CRM draft."
        items={caseStudies}
      />

      <section className="section contact-section" id="get-started">
        <div className="section-inner contact-grid">
          <div className="contact-copy">
            <h2>Get started</h2>
            <p>
              Tell us about company size, budget, and the worker you need. Or book a call and we will
              map the engagement live.
            </p>
            <a
              href={siteConfig.calendlyUrl}
              className="btn btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
              <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
            </a>
          </div>
          <EnterpriseForm />
        </div>
      </section>
    </InnerPageShell>
  );
}
