import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import InnerPageShell from "@/components/InnerPageShell";
import {
  pricingCompare,
  pricingFeatures,
  pricingReassurance,
} from "@/lib/inner-pages";
import { getSiteBaseUrl, siteConfig } from "@/lib/site-config";

const title = "Pricing | Qiko Labs";
const description =
  "Production-ready digital workers without hiring a full AI engineering team. Compare DIY cost with Qiko Labs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteBaseUrl()}/pricing` },
  openGraph: { title, description, url: `${getSiteBaseUrl()}/pricing` },
};

export default function PricingPage() {
  return (
    <InnerPageShell
      eyebrow="Pricing"
      title="Pricing that beats building it yourself."
      sub="Production-ready digital workers starting from $49 — without standing up your own AI stack."
    >
      <section className="section" id="teaser">
        <div className="section-inner reveal">
          <div className="price-teaser">
            <p className="price-teaser-amount">
              From <span>$49</span>
            </p>
            <p>Launch a production-ready digital worker without hiring a dedicated AI team.</p>
            <div className="price-teaser-actions">
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
        </div>
      </section>

      <section className="section philosophy-section" id="compare">
        <div className="section-inner reveal">
          <div className="section-head">
            <h2>Get value faster with Qiko</h2>
            <p>
              Building and running your own AI worker can cost thousands in time, infra, and GPUs.
              Labs wraps that into a clear path.
            </p>
          </div>
          <div className="compare-grid">
            <article className="compare-card">
              <h3>Traditional way</h3>
              <ul>
                {pricingCompare.traditional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="compare-foot">
                Typical cost: <strong>$5,000+ upfront</strong> and ongoing engineering every month.
              </p>
            </article>
            <article className="compare-card compare-card--accent">
              <h3>With Qiko Labs</h3>
              <ul>
                {pricingCompare.qiko.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="compare-foot">
                Typical cost: from <strong>$49</strong> to launch and iterate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="reassurance">
        <div className="section-inner reveal">
          <div className="reassurance-row">
            {pricingReassurance.map((item) => (
              <div key={item.title} className="reassurance-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-inner reveal">
          <div className="section-head">
            <h2>Feature comparison</h2>
            <p>Choose the plan that fits. Upgrade as your workers scale.</p>
          </div>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Premium</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.premium}</td>
                    <td>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing-note">
            Need custom IP ownership, on-prem, or dedicated support?{" "}
            <a href="/enterprise">Talk to Enterprise</a>.
          </p>
        </div>
      </section>

      <CtaBand />
    </InnerPageShell>
  );
}
