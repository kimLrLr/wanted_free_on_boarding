import { useState } from "react";

export const Count02 = () => {
  const [count, setCount] = useState(0);

  const onIcrenment = () => setCount((prev) => prev + 1);

  const onDecrement = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIcrenment}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
