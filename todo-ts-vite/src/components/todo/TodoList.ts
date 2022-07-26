import { TodoHandler } from "./TodoHandler";
import { TodoType } from "./Types";

export class TodoList {

    TodoHandler: TodoHandler;
    isEditMode: boolean;

    TodoList: HTMLDivElement;
    private HeaderTodoList: HTMLHeadElement;

    constructor(header: string){


        this.isEditMode = false;

        this.TodoList = <HTMLDivElement>document.createElement("article");
        this.HeaderTodoList = <HTMLHeadElement>document.createElement("h3");

        this.TodoHandler = new TodoHandler(header);

        this.renderTodos();

    }

    setHeaderTodolist(header: string){
        this.HeaderTodoList.innerText = header;
    }

    addTodo(props: TodoType){
        this.TodoList.appendChild(this.TodoHandler.addTodo(props));
    }

    deleteTodo(id: number){
        this.TodoHandler.deleteTodo(id);
    }

    editTodo(id: number){

        if(!this.isEditMode){

            this.isEditMode = true;
            this.TodoHandler.editTodo(id);

        }else{
            alert("다른 Todo를 수정중입니다.")
        }
    
    }
    doEdit(){
        this.isEditMode = !this.isEditMode;
        this.TodoHandler.doEdit();
    }
    cancelEdit(){
        this.isEditMode = !this.isEditMode;
        this.TodoHandler.cancelEdit();
    }

    render(header: string){

        this.TodoList.id = 'todo-list';

        this.setHeaderTodolist(header);
        this.TodoList.appendChild(this.HeaderTodoList);

        return this.TodoList;
    }

    renderTodos(){
        this.TodoList.replaceChildren();
        this.TodoList.appendChild(this.HeaderTodoList);
        this.TodoHandler.getTodos().map((todo)=>{
            this.TodoList.appendChild(todo.getTodo());
        });

    }

    getListEl(){
        return this.TodoList;
    }
}