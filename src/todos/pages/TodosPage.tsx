import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TodoList } from "../components";

export const TodosPage: React.FC = (): JSX.Element => {
  const { todos } = useSelector((state: RootState) => state.todos);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};
