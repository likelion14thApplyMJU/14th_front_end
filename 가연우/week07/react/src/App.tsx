import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {

  const [count, setCount] = useState<number>(0);

  const handleChangeCount = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <h1>카운터 앱</h1>
      <Viewer count={count} />
      <Controller onChangeCount={handleChangeCount} />
    </>
  );
}

export default App;