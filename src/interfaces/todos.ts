export type Todo = {
  id: string;
  desc: string;
  status: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

export type TodoState = {
  todos: Todo[];
};
