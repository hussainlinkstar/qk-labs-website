"use client";

import { useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000;

const BEATS = [
  {
    label: "Pulse",
    title: "AI on your CRM",
    body: "Insights, actions, and value from the records your team already trusts.",
    icon: "/qiko-static/assets/icons/labs-flash-purple.svg",
    visual: "/qiko-static/assets/qiko-flow-radial2.svg",
    visualAlt: "Orchestrator connecting research, QA, and real customers",
    tint: "pulse",
  },
  {
    label: "Workers",
    title: "Custom AI workers",
    body: "When the product is not enough, Labs ships the workflow into production.",
    icon: "/qiko-static/assets/icons/labs-worker-purple.svg",
    visual: "/qiko-static/assets/labs-hero-device.png",
    visualAlt: "Custom Labs AI worker on device",
    tint: "workers",
  },
  {
    label: "Ship",
    title: "Ship with the receipts",
    body: "Validated with real customers, hardened with feedback, ready to sell on.",
    icon: "/qiko-static/assets/icons/ranking.svg",
    visual: "/qiko-static/assets/build-with-qiko-labs.webp",
    visualAlt: "Qiko Labs build and ship graphic",
    tint: "ship",
  },
] as const;

export default function HeroStage() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleNext = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      const next = (indexRef.current + 1) % BEATS.length;
      indexRef.current = next;
      setIndex(next);
      scheduleNext();
    }, ROTATE_MS);
  };

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    scheduleNext();
    return clearTimer;
    // Autoplay boots once; scheduleNext re-arms itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (next: number) => {
    indexRef.current = next;
    setIndex(next);
    scheduleNext();
  };

  const beat = BEATS[index];

  return (
    <div
      className={`hero-stage hero-stage--${beat.tint}`}
      data-slide={beat.label}
      style={{ ["--hero-rotate-ms" as string]: `${ROTATE_MS}ms` }}
    >
      <div className="hero-stage-glow" aria-hidden="true" />

      <div className="hero-stage-visuals" aria-hidden="true">
        {BEATS.map((item, i) => (
          <div
            key={item.label}
            className={`hero-stage-visual${i === index ? " is-active" : ""}`}
          >
            <img src={item.visual} alt="" className="hero-stage-visual-img" />
          </div>
        ))}
      </div>

      <div className="hero-stage-panels">
        {BEATS.map((item, i) => (
          <div
            key={item.label}
            className={`hero-stage-panel${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="hero-stage-panel-top">
              <span className="pulse-chip">
                <img src={item.icon} alt="" width={16} height={16} />
                {item.label}
              </span>
              <span className="hero-stage-dots">
                {BEATS.map((dot, dotIndex) => (
                  <button
                    key={dot.label}
                    type="button"
                    tabIndex={i === index ? 0 : -1}
                    className={`hero-stage-dot${dotIndex === index ? " is-active" : ""}`}
                    aria-label={`Show ${dot.label}`}
                    aria-current={dotIndex === index ? "true" : undefined}
                    onClick={() => goTo(dotIndex)}
                  />
                ))}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="hero-stage-rail" role="tablist" aria-label="Hero highlights">
        {BEATS.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active}
              className={`hero-stage-rail-item${active ? " is-live" : ""}`}
              onClick={() => goTo(i)}
            >
              <span className="hero-stage-rail-label">{item.label}</span>
              {active ? (
                <span className="hero-stage-rail-progress" aria-hidden="true" key={`${item.label}-${index}`} />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
