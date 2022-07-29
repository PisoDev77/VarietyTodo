export interface Todo{
    id: number;
    content:{
        title: string;
        body: string;
    };
    isDone: boolean;
    category: string;
    tags?:{
        id:number;
        content: string;    
    }[],
}

export interface inProgressTodo extends Todo{
    isDone: false;
}

export interface DoneTodo extends Todo{
    isDone: true;
}
export interface TodoList {
    id: number;
    title: string;
    list?: Todo[];
}
