import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <Header />
      <Viewer count={count} />
      <Controller setCount={setCount} />
    </div>
  );
}

export default App;