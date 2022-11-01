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
      createdAt: new Date(),
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const {} = todosSlice.actions;
