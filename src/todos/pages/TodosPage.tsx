import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { TodoList } from "../components";

export const TodosPage: React.FC = (): JSX.Element => {
  const { todos } = useSelector((state: RootState) => state.todos);

  return (
    <>
      <Link to="/new">New</Link>

      <TodoList todos={todos} />
    </>
  );
};
