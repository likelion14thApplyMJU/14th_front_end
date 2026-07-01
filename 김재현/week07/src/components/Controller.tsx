interface ControllerProps {
  onChangeCount: (delta: number) => void;
}

function Controller({ onChangeCount }: ControllerProps) {
  const steps: number[] = [-1, -10, -100, +100, +10, +1];

  return (
    <section className="section">
      <div className="controller-buttons">
        {steps.map((step) => (
          <button
            key={step}
            className="btn"
            onClick={() => onChangeCount(step)}
          >
            {step > 0 ? `+${step}` : step}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Controller;
