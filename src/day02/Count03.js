import { useState } from "react";

export const Count03 = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={incrementHandler}>Increment</button>{" "}
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
};
