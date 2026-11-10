type Card = {
  title: string;
  body: string;
  icon: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: readonly Card[];
};

export default function PlatformHandles({
  id = "handles",
  eyebrow = "We do the hard work",
  title,
  description,
  items,
}: Props) {
  return (
    <section className="section handles-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <p className="how-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="handles-grid" data-stagger-group>
          {items.map((item) => (
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
  );
}
