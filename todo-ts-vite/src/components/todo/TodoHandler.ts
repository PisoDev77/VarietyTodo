import { Todo } from "./Todo";
import { TodoType } from "./Types";

export class TodoHandler{
    
    private id_increment: number;
    Todos: Todo[];
    editingTodo?: Todo;

    constructor(){
        //Todos 초기화니까 나중에 localStorage 여기서 로드하자 
        this.id_increment = 0;
        this.Todos = [];
        this.editingTodo = undefined;
    }

    addTodo(props: TodoType): HTMLDivElement{
        props.id = ++this.id_increment;
        const todo = new Todo(props);
        this.Todos.push(new Todo(props));

        return todo.getTodo();
    }

    deleteTodo(id: number){
        this.Todos = this.Todos.filter((todo)=>todo.getId() !== id);
    }
    

    editTodo(id: number){
        const todoEl = this.Todos.find((todo) => todo.getId() === id);
        this.editingTodo = todoEl;
        todoEl?.editMode();

        console.log(this.Todos)
    }
    doEdit(){
        this.editingTodo?.doEdit();
    }
    cancelEdit(){
        this.editingTodo?.cancelEdit();
    }


    getTodos(){
        return this.Todos;
    }
}