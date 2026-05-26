interface ViewerProps {
  count: number;
}

function Viewer({ count }: ViewerProps) {
  return (
    <section className="section">
      <p className="viewer-label">현재 카운트 :</p>
      <p className="viewer-count">{count}</p>
    </section>
  );
}

export default Viewer;
