import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleChangeCount = (delta: number): void => {
    setCount((prev) => prev + delta);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onChangeCount={handleChangeCount} />
    </div>
  );
}

export default App;
