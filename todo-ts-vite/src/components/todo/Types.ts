type TodoType = {
    id?: number;
    content: string;
}

interface TodoStore {
    save(): boolean;
    load(): boolean;
    select(): TodoType[];
}

export type { TodoType, TodoStore };