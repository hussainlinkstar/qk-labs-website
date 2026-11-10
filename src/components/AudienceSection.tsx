type Card = {
  title: string;
  body: string;
  icon: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items: readonly Card[];
};

export default function AudienceSection({
  id = "audience",
  eyebrow = "Built for experts",
  title,
  items,
}: Props) {
  return (
    <section className="section audience-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <p className="how-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="audience-grid" data-stagger-group>
          {items.map((item) => (
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
  );
}
