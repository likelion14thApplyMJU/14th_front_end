type ViewerProps = { // ViewerProps는 count라는 값을 가짐
  count: number; // count는 number 타입
};

const Viewer = ({ count }: ViewerProps) => { // Viewer는 현재 카운트 값을 보여줌
  return (
    <section className="viewer">
      <h2>현재 카운트</h2>
      <div className="count">{count}</div>
    </section>
  );
};

export default Viewer;