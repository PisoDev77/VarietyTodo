import {Todo} from "./Todo";

type TodoType = {
    id?: number;
    content: string;
}

interface TodoStore {
    save(todos: TodoType[]): void;
    load(): TodoType[];
    // select(): TodoType[];
}

export type { TodoType, TodoStore };