import React, { createContext, useEffect, useReducer, useRef } from "react";

const ACTIONS = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
};

export const CounterContext = createContext();

export default function Count08() {
  const [count, dispatch] = useReducer(reducer, 0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  function reducer(count, { type }) {
    switch (type) {
      case ACTIONS.DECREMENT:
        return count - 1;
      case ACTIONS.INCREMENT:
        return count + 1;
      default:
        throw new Error("Something went wrong.");
    }
  }

  return (
    <CounterContext.Provider value={{ reducer }}>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </button>
      <button
        onClick={() => {
          setTimeout(() => alert(countRef.current), 3000);
        }}
      >
        Show Count after 3 seconds
      </button>
    </CounterContext.Provider>
  );
}
