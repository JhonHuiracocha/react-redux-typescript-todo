import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Todo, TodoState } from "../../../interfaces";

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      desc: "React toolkit",
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>): void => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state: TodoState, action: PayloadAction<string>): void => {
      const index: number = state.todos.findIndex(
        ({ id }: Todo) => id === action.payload
      );

      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo: (state: TodoState, action: PayloadAction<string>): void => {
      const index: number = state.todos.findIndex(
        ({ id }: Todo) => id === action.payload
      );

      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
