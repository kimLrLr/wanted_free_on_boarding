import { Comp01 } from "./components/Comp01";

export const ToDoMiniTest01 = () => {
  return (
    <>
      <h2>TODO LIST 01</h2>
      <ul>
        <Comp01 title="React 소개" />
        <Comp01 title="컴포넌트 이해하기" />
        <Comp01 title="JSX 깊이 알기" />
        <Comp01 title="컴포넌트 만들기 실습" />
      </ul>
    </>
  );
};
