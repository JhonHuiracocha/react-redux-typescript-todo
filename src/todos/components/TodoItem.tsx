import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Todo } from "../../interfaces";
import { deleteTodo, toggleTodo } from "../../store";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <li>
      <strong>{todo.completed ? "Done" : "Pending"}: </strong>

      <span
        style={{
          textDecoration: `${todo.completed ? "line-through" : "none"}`,
        }}
      >
        {todo.desc}
      </span>

      <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>

      <Link to={`/todos/${todo.id}`}>
        <button>Update</button>
      </Link>

      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};
