import { CounterProvider, Counter, AnotherComponent } from "./context";

export const Count07 = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
        <AnotherComponent />
      </CounterProvider>
    </>
  );
};
