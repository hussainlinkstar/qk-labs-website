import LabsRevealGraphic from "@/components/shared/LabsRevealGraphic";

export type WayFeature = {
  title: string;
  body: string;
  icon: string;
};

export type WayCard = {
  title: string;
  body: string;
  features: readonly WayFeature[];
  ctaLabel: string;
  ctaHref: string;
  variant?: "default" | "dark";
  graphic: "flow-radial" | "labs-reveal";
  outline?: boolean;
};

type Props = {
  id?: string;
  title: React.ReactNode;
  description: string;
  cards: readonly WayCard[];
};

function WayGraphic({ graphic }: { graphic: WayCard["graphic"] }) {
  if (graphic === "labs-reveal") return <LabsRevealGraphic />;
  return (
    <div className="way-flow-graphic" aria-hidden="true">
      <img
        src="/qiko-static/assets/qiko-flow-radial2.svg"
        alt=""
        className="way-flow-graphic-img"
      />
    </div>
  );
}

export default function TwoWaysSection({
  id = "products",
  title,
  description,
  cards,
}: Props) {
  return (
    <section className="section two-ways" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <h2 className="with-logo">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="way-cards" data-stagger-group>
          {cards.map((card) => (
            <article
              key={card.title}
              className={`way-card${card.variant === "dark" ? " way-card-dark" : ""} reveal-item`}
            >
              <div className="way-head">
                <div className="way-copy">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
                <WayGraphic graphic={card.graphic} />
              </div>
              <ul className="way-features">
                {card.features.map((feature) => (
                  <li key={feature.title}>
                    <img src={feature.icon} alt="" />
                    <div className="way-feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={card.ctaHref}
                className={`btn ${card.outline === false ? "btn-primary" : "btn-outline"}`}
                rel={card.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {card.ctaLabel}
                <img
                  src="/qiko-static/assets/icons/arrow-white.svg"
                  alt=""
                  className={card.outline === false ? undefined : "arrow-purple"}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
