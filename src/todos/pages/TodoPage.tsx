import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../../hooks";
import { Todo, TodoForm } from "../../interfaces";
import { addTodo } from "../../store";

export const TodoPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const [formState, setFormState] = useState<TodoForm>({ desc: "" });
  const { desc, handleChange } = useForm<TodoForm>(formState);

  const handleTodoSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!desc) {
      return;
    }

    const newTodo: Todo = {
      id: uuidv4(),
      desc,
      status: false,
    };

    dispatch(addTodo(newTodo));

    navigate("/");
  };

  return (
    <>
      <h5>{`${todoId ? "Update Todo" : "Create Todo"}`}</h5>

      <form onSubmit={handleTodoSubmit}>
        <input
          type="text"
          name="desc"
          placeholder="Enter a description"
          value={desc}
          onChange={handleChange}
        />
        <button type="submit">{`${todoId ? "Update" : "Create"}`}</button>
      </form>
    </>
  );
};
