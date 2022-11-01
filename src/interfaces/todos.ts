export type Todo = {
  id: string;
  desc: string;
  status: boolean;
};

export type TodoForm = {
  desc: string;
};

export type TodoState = {
  todos: Todo[];
};
