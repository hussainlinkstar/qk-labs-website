import type { Metadata } from "next";
import EnterpriseForm from "@/components/EnterpriseForm";
import InnerPageShell from "@/components/InnerPageShell";
import { enterpriseServices } from "@/lib/inner-pages";
import { getSiteBaseUrl } from "@/lib/site-config";

const title = "Enterprise | Qiko Labs";
const description =
  "Enterprise digital workers with custom training, private deployment options, and dedicated Labs support.";

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
      title="Enterprise digital workers"
      sub="Custom models, dedicated implementation, private deployment options, and full IP ownership when you need it."
    >
      <section className="section" id="services">
        <div className="section-inner reveal">
          <div className="handles-grid" data-stagger-group>
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

      <section className="section contact-section" id="get-started">
        <div className="section-inner contact-grid">
          <div className="contact-copy">
            <h2>Get started</h2>
            <p>
              Tell us about company size, budget, and the worker you need. The Labs team will reply
              within 24 hours.
            </p>
          </div>
          <EnterpriseForm />
        </div>
      </section>
    </InnerPageShell>
  );
}
