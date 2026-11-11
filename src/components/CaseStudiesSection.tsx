import type { CaseStudy } from "@/lib/case-studies";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly CaseStudy[];
};

export default function CaseStudiesSection({
  id = "case-studies",
  eyebrow = "Client case studies",
  title,
  description,
  items,
}: Props) {
  return (
    <section className="section case-studies-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <p className="how-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="case-studies-grid" data-stagger-group>
          {items.map((study) => (
            <article
              key={study.client}
              className={`case-study-card case-study-card--${study.accent} reveal-item`}
            >
              <div className="case-study-top">
                <span className="case-study-eyebrow">{study.eyebrow}</span>
                <p className="case-study-meta">
                  <strong>{study.client}</strong>
                  <span>{study.sector}</span>
                </p>
              </div>
              <h3>{study.title}</h3>
              <p className="case-study-summary">{study.summary}</p>
              <div className="case-study-results">
                {study.results.map((result) => (
                  <div key={result.label} className="case-study-result">
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                  </div>
                ))}
              </div>
              <div className="creator-tags">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
