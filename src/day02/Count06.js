import { useEffect, useReducer, useRef } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // count를 1 증가
    case "decrement":
      return { count: state.count - 1 }; // count를 1 감소
    default:
      throw new Error(); // 정의되지 않은 action.type의 경우 에러를 발생시킴
  }
};

export const Count06 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const countRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${state.count}`;
    countRef.current = state.count;
  }, [state.count]);

  const alertCount = () => {
    setTimeout(() => {
      alert(`마지막 카운트: ${countRef.current}`);
    }, 3000); //3초 후에 countRef.current 값을 alert로 출력
  };

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={alertCount}>3초 뒤 카운트 결과</button>
    </>
  );
};
