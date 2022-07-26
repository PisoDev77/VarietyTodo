
type TodoType = {
    id?: number;
    content: string;
}

interface TodoStoreInterface {
    save(todos: TodoType[]): void;
    load(): TodoType[];
    // select(): TodoType[];
}

export type { TodoType, TodoStoreInterface };