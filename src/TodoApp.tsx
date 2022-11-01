import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store";

export const TodoApp: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
