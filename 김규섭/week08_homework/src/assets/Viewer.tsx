const Viewer = ({ count }: { count: number }) => {
  return (
    <section style={{ background: "#f0f0f0", padding: "20px", marginBottom: "10px" }}>
      <p>현재 카운트 :</p>
      <h2>{count}</h2>
    </section>
  );
};

export default Viewer;