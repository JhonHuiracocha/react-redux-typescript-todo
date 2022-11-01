import React from "react";
import { Todo } from "../../interfaces";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo }): JSX.Element => {
  return (
    <li>
      <strong>{todo.status ? "DONE" : "Pending"}: </strong>
      {todo.desc}
    </li>
  );
};
