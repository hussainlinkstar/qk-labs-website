const BADGES = [
  { angle: "-90deg", src: "/qiko-static/assets/icons/logo-chatgpt.webp" },
  { angle: "-18deg", src: "/qiko-static/assets/icons/logo-gemini.webp" },
  { angle: "54deg", src: "/qiko-static/assets/icons/logo-claude.webp" },
  { angle: "126deg", src: "/qiko-static/assets/icons/logo-grok.webp" },
  { angle: "198deg", src: "/qiko-static/assets/icons/logo-perplexity.webp" },
] as const;

type Props = {
  label?: string;
  score?: string;
  total?: string;
  delta?: string;
  sub?: string;
};

export default function SignalOrbitGraphic({
  label = "Example AI visibility score",
  score = "72",
  total = "/100",
  delta = "↑ 12 pts",
  sub = "Illustrative trend",
}: Props) {
  return (
    <div
      className="signal-orbit-graphic"
      role="img"
      aria-label={`${label} ${score}${total}`}
    >
      <div className="orbit-track" aria-hidden="true" />
      <div className="orbit-ring" aria-hidden="true">
        {BADGES.map((badge) => (
          <div key={badge.src} className="orbit-badge" style={{ ["--angle" as string]: badge.angle }}>
            <div className="orbit-badge-inner">
              <img src={badge.src} width={112} height={112} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        ))}
      </div>
      <div className="signal-score-card">
        <span className="signal-score-label">{label}</span>
        <div className="signal-score-row">
          <span className="signal-score-value">{score}</span>
          <span className="signal-score-total">{total}</span>
        </div>
        <span className="signal-score-pill">{delta}</span>
        <span className="signal-score-sub">{sub}</span>
        <svg className="signal-chart" viewBox="0 0 240 84" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="signalChartGradLabs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6a63dd" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6a63dd" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="signal-chart-area"
            d="M2,62 L34,44 L62,56 L92,30 L122,48 L152,34 L188,14 L222,8 L222,78 L2,78 Z"
            fill="url(#signalChartGradLabs)"
          />
          <path
            className="signal-chart-line"
            d="M2,62 L34,44 L62,56 L92,30 L122,48 L152,34 L188,14 L222,8"
            stroke="#5850c9"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="signal-chart-dot" cx="222" cy="8" r="5" fill="#5850c9" />
        </svg>
      </div>
    </div>
  );
}
