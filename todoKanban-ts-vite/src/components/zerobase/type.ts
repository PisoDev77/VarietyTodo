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
export interface Kanban {
    id: number;
    title: string;
    todos: Todo[];
}
