export type FeatureCardItem = {
  title: string;
  body: string;
  icon: string;
  tint: "blue" | "orange" | "red" | "purple";
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: readonly FeatureCardItem[];
  note?: string;
};

export default function FeatureCardsSection({
  id = "see",
  eyebrow,
  title,
  description,
  items,
  note,
}: Props) {
  return (
    <section className="section brand-cards" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          {eyebrow ? <p className="how-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-row" data-stagger-group>
          {items.map((item) => (
            <article key={item.title} className={`feature-card tint-${item.tint} reveal-item`}>
              <div className="feature-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        {note ? (
          <div className="pill-note">
            <span>{note}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
