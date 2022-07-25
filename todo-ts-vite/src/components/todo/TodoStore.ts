
import {TodoStore, TodoType} from "./Types";

export class TodoStoreLocal implements TodoStore{

    private header: string;

    constructor(header: string){
        this.header = header;
    }

    save(todos: TodoType[]): void {
        localStorage.setItem(this.header, JSON.stringify(todos));
    }

    load(): TodoType[] {
        const getTodos = localStorage.getItem(this.header);
            if(getTodos){
                const res = JSON.parse(getTodos);
                return res;
            }else{
                return [];
            }
        return [];
    }

}