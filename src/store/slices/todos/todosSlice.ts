import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Todo, TodoState } from "../../../interfaces";

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      desc: "First Todo",
      status: false,
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
  },
});

export const { addTodo } = todosSlice.actions;
