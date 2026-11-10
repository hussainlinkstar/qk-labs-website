const BANDS = [
  { top: "0%", bottom: "87%" },
  { top: "13%", bottom: "63%" },
  { top: "37%", bottom: "40%" },
  { top: "60%", bottom: "0%" },
] as const;

export default function LabsRevealGraphic() {
  return (
    <div className="way-graphic-wrap">
      <div
        className="qiko-labs-reveal"
        role="img"
        aria-label="Flow diagram: Custom AI Workers, Agentic Workflows and Your Data and Tools feed into Built on Qiko"
      >
        {BANDS.map((band) => (
          <div
            key={`${band.top}-${band.bottom}`}
            className="qiko-labs-band"
            style={{
              ["--clip-top" as string]: band.top,
              ["--clip-bottom" as string]: band.bottom,
            }}
          >
            <img
              className="qiko-labs-layer"
              src="/qiko-static/assets/build-with-qiko-labs.webp"
              width={424}
              height={376}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
