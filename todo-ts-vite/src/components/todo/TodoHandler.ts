import { Todo } from "./Todo";
import { TodoType } from "./Types";
import { TodoStoreLocal } from "./TodoStore";

export class TodoHandler{
    
    
    private id_increment: number;
    Todos: Todo[];
    TodoTypes: TodoType[];
    editingTodo?: Todo;

    private TodoStore: TodoStoreLocal;

    constructor(header: string){
        //Todos 초기화니까 나중에 localStorage 여기서 로드하자 
        this.id_increment = 0;
        this.editingTodo = undefined;
        this.TodoStore = new TodoStoreLocal(header);
        this.Todos = [];
        this.TodoTypes = this.TodoStore.load();
        console.log(this.TodoTypes);
        this.initTodos();
    }

    addTodo(props: TodoType): HTMLDivElement{
        props.id = ++this.id_increment;
        const todo = new Todo(props);

        this.Todos.push(new Todo(props));
        this.TodoTypes.push(props);
        this.TodoStore.save(this.TodoTypes);

        return todo.getTodo();
    }

    deleteTodo(id: number){
        this.Todos = this.Todos.filter((todo)=>todo.getId() !== id);
        this.TodoTypes = this.TodoTypes.filter((todo)=>todo.id !== id);
        this.TodoStore.save(this.TodoTypes);
    }
    

    editTodo(id: number){
        const todoEl = this.Todos.find((todo) => todo.getId() === id);
        this.editingTodo = todoEl;
        todoEl?.editMode();
    }
    doEdit(){
        const todoType = this.editingTodo?.doEdit();
        const todoEl = this.TodoTypes.find((todo) => todo.id === todoType?.id);
        if(todoEl && todoType){            
            todoEl.content = todoType.content;
        }
        console.log(this.TodoTypes, this.Todos);
        this.TodoStore.save(this.TodoTypes);
    }
    cancelEdit(){
        this.editingTodo?.cancelEdit();
    }


    initTodos(){
        this.TodoTypes.map((todo)=>{
            this.Todos.push(new Todo(todo));
        });
    }
    getTodos(){
        return this.Todos;
    }
}