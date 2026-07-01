import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Controller from "./components/Contoller"

import {useState} from "react";

function App() {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <Header/>
      <Viewer state={state}/>
      <Controller state={state} setState={setState} />
    </>
  );
};

export default App;