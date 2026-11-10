import LabsRevealGraphic from "@/components/shared/LabsRevealGraphic";
import SignalOrbitGraphic from "@/components/shared/SignalOrbitGraphic";

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
  graphic: "signal-orbit" | "labs-reveal";
  outline?: boolean;
};

type Props = {
  id?: string;
  title: React.ReactNode;
  description: string;
  cards: readonly WayCard[];
};

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
                {card.graphic === "signal-orbit" ? <SignalOrbitGraphic /> : <LabsRevealGraphic />}
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
