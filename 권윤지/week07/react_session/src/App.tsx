import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  // count: 현재 카운트 값, setCount: count 값 변경 함수
  const [count, setCount] = useState<number>(0);

  // 버튼 클릭 시 전달받은 value만큼 count 값 변경
  const onClickButton = (value: number) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <Viewer count={count} /> 
      {/* Viewer 컴포넌트에 현재 count 값 props로 전달 */}

      <Controller onClickButton={onClickButton} />
      {/* Controller 컴포넌트에 count 값 변경 함수 props로 전달 */}
    </div>
  );
}

export default App;