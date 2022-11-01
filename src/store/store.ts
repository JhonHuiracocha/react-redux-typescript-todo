import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices";

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
