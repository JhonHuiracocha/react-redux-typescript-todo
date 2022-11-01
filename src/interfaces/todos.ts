export type Todo = {
  id: string;
  desc: string;
  completed: boolean;
};

export type TodoForm = {
  desc: string;
};

export type TodoState = {
  todos: Todo[];
};
