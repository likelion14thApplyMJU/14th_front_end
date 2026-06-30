const Controller = ({ onChangeCount }: { onChangeCount: (value: number) => void }) => {
  return (
    <section style={{ background: "#f0f0f0", padding: "21px" }}>
      {[-1, -10, -100, +100, +10, +1].map((value) => (
        <button key={value} onClick={() => onChangeCount(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </section>
  );
};

export default Controller;