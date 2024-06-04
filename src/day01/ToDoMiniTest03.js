import { Comp01 } from "./components/Comp01";
import PropTypes from "prop-types";

export const ToDoMiniTest03 = () => {
  const todos = [
    "React 소개",
    "컴포넌트 이해하기",
    "JSX 깊이 알기",
    "컴포넌트 만들기 실습",
  ];

  return (
    <>
      <h2>TODO LIST 03</h2>

      <ul>
        {todos.map((todo, index) => (
          <Comp01 key={index} title={todo} />
        ))}
      </ul>
    </>
  );

  ToDoMiniTest03.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
};
