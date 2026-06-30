// components/Display.tsx
import useCounterStore from "../store/useCounterStore";

function Display() {
  // Counter와 완전히 같은 count를 공유함!
  const count = useCounterStore((state) => state.count);

  return <p>현재 카운트: {count}</p>;
}

export default Display;