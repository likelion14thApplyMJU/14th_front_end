// components/Counter.tsx
import useCounterStore from "../store/useCounterStore";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}

export default Counter;