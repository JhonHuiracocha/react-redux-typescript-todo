import React from "react";
import { Route, Routes } from "react-router-dom";
import { TodoRoutes } from "../todos";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<TodoRoutes />} />
    </Routes>
  );
};
