import ChatMockup from "@/components/ChatMockup";
import { creatorStory } from "@/lib/home-sections";

export default function CreatorStory() {
  return (
    <section className="section creator-section" id="story">
      <div className="section-inner reveal">
        <div className="section-head">
          <p className="how-eyebrow">Creator success story</p>
          <h2>
            Turn niche expertise into a{" "}
            <span className="text-accent">revenue-ready digital worker.</span>
          </h2>
        </div>
        <div className="creator-grid">
          <article className="creator-card">
            <div className="creator-person">
              <span className="creator-avatar" aria-hidden="true">
                A
              </span>
              <div>
                <h3>{creatorStory.name}</h3>
                <p>{creatorStory.role}</p>
              </div>
            </div>
            {creatorStory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="creator-copy">
                {paragraph}
              </p>
            ))}
            <div className="creator-metrics">
              {creatorStory.metrics.map((metric) => (
                <div key={metric.label} className="creator-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="creator-tags">
              {creatorStory.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}