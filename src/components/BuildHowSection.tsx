type Step = {
  step: string;
  title: string;
  body: string;
  icon: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  steps: readonly Step[];
};

export default function BuildHowSection({
  id = "build-how",
  eyebrow = "How it works",
  title,
  description,
  steps,
}: Props) {
  return (
    <section className="section build-how-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <p className="how-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="build-how-row" data-stagger-group>
          {steps.map((item) => (
            <article key={item.step} className="build-how-card reveal-item">
              <div className="build-how-top">
                <span className="build-how-step">{item.step}</span>
                <div className="build-how-icon" aria-hidden="true">
                  <img src={item.icon} alt="" width={22} height={22} />
                </div>
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
