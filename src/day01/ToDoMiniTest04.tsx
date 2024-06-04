import React, { useState } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #fff;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

interface Todo {
  checked: boolean;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
  onCheckboxChange: (index: number) => void;
}

interface TodoItemProps {
  todo: Todo;
  index: number;
  onCheckboxChange: (index: number) => void;
}

const ToDoMiniTest04: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { checked: false, title: "React 소개" },
    { checked: false, title: "컴포넌트 이해하기" },
    { checked: false, title: "JSX 깊이 알기" },
    { checked: false, title: "컴포넌트 만들기 실습" },
  ]);

  const handleCheckboxChange = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    index,
    onCheckboxChange,
  }) => {
    return (
      <ListItem>
        <Checkbox
          type="checkbox"
          checked={todo.checked}
          onChange={() => onCheckboxChange(index)}
        />
        {todo.title}
      </ListItem>
    );
  };

  const TodoList: React.FC<TodoListProps> = ({ todos, onCheckboxChange }) => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <TodoList todos={todos} onCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default ToDoMiniTest04;
