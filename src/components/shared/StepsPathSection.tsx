import StepsConnectors from "@/components/shared/StepsConnectors";

export type StepItem = {
  label: string;
  status: string;
  title: string;
  body: string;
  icon: string;
};

type Props = {
  id?: string;
  title: string;
  description: string;
  steps: readonly StepItem[];
};

export default function StepsPathSection({
  id = "path",
  title,
  description,
  steps,
}: Props) {
  return (
    <section className="section steps-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="steps-row" data-stagger-group>
          <StepsConnectors />
          {steps.map((step) => (
            <div key={step.title} className="step reveal-item">
              <span className="step-label">{step.label}</span>
              <div className="step-circle">
                <div className="step-circle-inner">
                  <img src={step.icon} alt="" />
                </div>
              </div>
              <span className="status-pill">{step.status}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
