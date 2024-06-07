import { AnotherComponent } from "./components/AnotherComponent";
import { Counter } from "./components/Counter";
import { CounterProvider } from "./components/CounterProvider";

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
