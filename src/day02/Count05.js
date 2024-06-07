import { useEffect, useRef, useState } from "react";

export const Count05 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    console.log(`Count: ${count}`);
    countRef.current = count;
  }, [count]);

  const alertCount = () => {
    setTimeout(() => {
      alert(`마지막 카운트: ${countRef.current}`);
    }, 3000); //3초 후에 countRef.current 값을 출력
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={alertCount}>3초 뒤 카운트 결과</button>
    </>
  );
};
