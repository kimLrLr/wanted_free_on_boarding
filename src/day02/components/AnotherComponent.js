import { useCounter } from "./CounterProvider";

export const AnotherComponent = () => {
  const [state, dispatch] = useCounter();

  return (
    <>
      <h2>Another Component Count: {state.count} </h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment from Another Component
      </button>
    </>
  );
};
