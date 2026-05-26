import Viewer from './components/Viewer.tsx';
import Controller from './components/Controller.tsx';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Viewer count={count} />
      <Controller setCount={setCount} />
    </>
  );
}

export default App
