type ControllerProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Controller = ({ setCount }: ControllerProps) => {
  const handleButtonClick = (value: number) => {
    setCount((prev) => prev + value);
  };

  const buttonStyle = {
    padding: "5px 10px",
    margin: "0 3px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px"
  };

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      padding: "15px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "flex-start"
    }}>
      <button style={buttonStyle} onClick={() => handleButtonClick(-1)}>-1</button>
      <button style={buttonStyle} onClick={() => handleButtonClick(-10)}>-10</button>
      <button style={buttonStyle} onClick={() => handleButtonClick(-100)}>-100</button>
      <button style={buttonStyle} onClick={() => handleButtonClick(100)}>+100</button>
      <button style={buttonStyle} onClick={() => handleButtonClick(10)}>+10</button>
      <button style={buttonStyle} onClick={() => handleButtonClick(1)}>+1</button>
    </div>
  );
};

export default Controller;