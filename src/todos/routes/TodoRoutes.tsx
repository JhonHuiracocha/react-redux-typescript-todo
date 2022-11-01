import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TodoPage, TodosPage } from "../pages";

export const TodoRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/new" element={<TodoPage />} />
      <Route path="/todos/:todoId" element={<TodoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
