interface ViewerProps {
  count: number;
}

const Viewer = ({ count }: ViewerProps) => {

  return (
    <section>
      <h2>현재 카운트</h2>
      <p>{count}</p>
    </section>
  );
};

export default Viewer;