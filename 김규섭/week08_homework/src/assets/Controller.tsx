import { useState } from "react";
import Viewer from "./Viewer";
import Controller from "./Controller";

const App = () => {
  const [count, setCount] = useState(0);

  const handleChangeCount = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onChangeCount={handleChangeCount} />
    </div>
  );
};

export default App;