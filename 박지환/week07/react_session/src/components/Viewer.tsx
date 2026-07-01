type ViewerProps = {
  count: number;
};

const Viewer = ({ count }: ViewerProps) => {
  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "15px",
      textAlign: "left"
    }}>
      <p style={{ color: "#666", fontSize: "14px", margin: "0 0 10px 0" }}>
        현재 카운트 :
      </p>
      <h3 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
        {count}
      </h3>
    </div>
  );
};

export default Viewer;