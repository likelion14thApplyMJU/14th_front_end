import { useReducer } from "react";

type State = { count: number};

type Action =
 | { type: "INCREASE" } 
 | { type: "DECREASE" }
 | { type: "RESET" }
 | { type: "INCREMENT_BY"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREASE":
      return {count: state.count + 1}
  case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENT_BY":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

function App() {
  // 3. useReducer 사용 (reducer 함수, 초기 state)
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 10 })}>
        +10
      </button>
    </div>
  );
}

export default App;