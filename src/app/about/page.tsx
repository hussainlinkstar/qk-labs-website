import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import InnerPageShell from "@/components/InnerPageShell";
import {
  aboutMission,
  aboutPhilosophy,
  aboutProcess,
  aboutTeamTags,
} from "@/lib/inner-pages";
import { getSiteBaseUrl } from "@/lib/site-config";

const title = "About Qiko Labs";
const description =
  "Qiko Labs turns human expertise into scalable digital workers — with Pulse for B2B teams and custom builds when the product is not enough.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteBaseUrl()}/about` },
  openGraph: { title, description, url: `${getSiteBaseUrl()}/about` },
};

export default function AboutPage() {
  return (
    <InnerPageShell
      eyebrow="About Qiko Labs"
      title="Turning human expertise into scalable digital workers."
      sub="The future isn’t one model that knows everything. It’s specialised workers that reflect real people and real businesses."
    >
      <section className="section" id="mission">
        <div className="section-inner about-mission reveal">
          <div className="about-mission-copy">
            <p className="how-eyebrow">Our mission</p>
            <h2>What Qiko stands for</h2>
            <p>
              Qiko Labs exists to turn deep expertise into secure digital workers. The most
              valuable AI isn’t generic — it’s personal, specialised, and built on real knowledge.
            </p>
            <p>
              We’re not another chatbot platform. We’re the infrastructure that lets experts and
              B2B teams create workers at scale without becoming AI engineers.
            </p>
          </div>
          <div className="audience-grid about-mission-cards" data-stagger-group>
            {aboutMission.map((item) => (
              <article key={item.title} className="audience-card reveal-item">
                <div className="audience-icon" aria-hidden="true">
                  <img src={item.icon} alt="" width={24} height={24} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section philosophy-section" id="philosophy">
        <div className="section-inner reveal">
          <div className="section-head">
            <p className="how-eyebrow">Our philosophy</p>
            <h2>Why digital workers matter</h2>
          </div>
          <div className="compare-grid">
            <article className="compare-card">
              <h3>Generic models</h3>
              <p>Great generalists — with hard limits for specialised work:</p>
              <ul>
                {aboutPhilosophy.generic.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="compare-card compare-card--accent">
              <h3>Digital workers</h3>
              <p>Designed to solve those problems:</p>
              <ul>
                {aboutPhilosophy.workers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-inner reveal">
          <div className="section-head">
            <p className="how-eyebrow">Our process</p>
            <h2>How Labs guides you</h2>
            <p>
              Guided flows from brief to launch — so your worker gets live without workshops and
              waiting.
            </p>
          </div>
          <div className="process-list" data-stagger-group>
            {aboutProcess.map((item) => (
              <article key={item.step} className="process-item reveal-item">
                <div className="process-icon" aria-hidden="true">
                  <img src={item.icon} alt="" width={22} height={22} />
                </div>
                <div className="process-body">
                  <div className="process-title-row">
                    <span>{item.step}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-inner reveal">
          <div className="section-head">
            <p className="how-eyebrow">The team</p>
            <h2>Built by people who ship</h2>
          </div>
          <div className="team-card">
            <p>
              Qiko is built by people with backgrounds in enterprise AI, infrastructure, and SaaS.
              We’ve shipped AI products across recruitment, travel, and digital workforce
              automation.
            </p>
            <p>
              We’re security-minded, experienced in production workloads, and committed to tools
              that last.
            </p>
            <div className="creator-tags">
              {aboutTeamTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </InnerPageShell>
  );
}
