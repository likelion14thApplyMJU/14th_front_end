import { useState } from "react";
import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <h1>Simple Counter</h1>
      <Main state={state}/>
      <div style={{ backgroundColor: "#e0e0e0", padding: "10px" }}>
        <Button onClick={() => setState(state + (-1))} text="-1"/>
        <Button onClick={() => setState(state + (-10))} text="-10"/>
        <Button onClick={() => setState(state + (-100))} text="-100"/>
        <Button onClick={() => setState(state + 100)} text="+100"/>
        <Button onClick={() => setState(state + 10)} text="+10"/>
        <Button onClick={() => setState(state + 1)} text="+1"/>
      </div>
    </>
  );
};

export default App;