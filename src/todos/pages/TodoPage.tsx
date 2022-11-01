import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../../hooks";
import { Todo, TodoForm } from "../../interfaces";
import { addTodo, RootState, updateTodo } from "../../store";

export const TodoPage: React.FC = (): JSX.Element => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const { desc, handleChange, handleSetFormState } = useForm<TodoForm>({
    desc: "",
  });

  const handleTodoSubmit = (event: FormEvent): void => {
    event.preventDefault();

    if (!desc) {
      return;
    }

    const newTodo: Todo = {
      id: todoId ? todoId : uuidv4(),
      desc,
      completed: false,
    };

    if (todoId) {
      dispatch(updateTodo(newTodo));
    } else {
      dispatch(addTodo(newTodo));
    }

    navigate("/", {
      replace: true,
    });
  };

  useEffect(() => {
    if (todoId) {
      const todo: Todo | null =
        todos.find((todo) => todo.id === todoId) || null;

      if (!todo) {
        return;
      }

      handleSetFormState({
        desc: todo.desc,
      });
    }
  }, [todoId]);

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
