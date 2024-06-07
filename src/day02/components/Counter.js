import { useCounter } from "./CounterProvider";

export const Counter = () => {
  const [state, dispatch] = useCounter();

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
