import {TodoNav} from "./todo/TodoNav";
import { TodoList } from "./todo/TodoList";
import { TodoForm } from "./todo/TodoForm";

// import { TodoType } from "./todo/Types";
import { TodoEvents } from "./todo/TodoEvents";

export class TodoApp {

    /**
     * Todo Container
     * Todo 컨테이너 생성
     * 
     */
    TodoContainer: HTMLDivElement;
    
    todoNav: TodoNav;
    todoList: TodoList;
    notTodoList: TodoList;
    todoForm: TodoForm;

    todoEvents: TodoEvents;
    
    constructor(){
        this.TodoContainer = <HTMLDivElement>document.createElement("main");
        this.todoNav = new TodoNav();
        this.todoList = new TodoList();
        this.notTodoList = new TodoList();
        this.todoForm = new TodoForm();

        this.todoEvents = new TodoEvents(this.TodoContainer, this.todoForm, this.todoList, this.notTodoList);
        
    }



    render(){
        // todo-cotainer render
        this.TodoContainer.id = "todo-container";
        this.TodoContainer.appendChild(this.todoNav.getTodoNav());
        this.TodoContainer.appendChild(this.todoForm.getTodoForm());
        this.TodoContainer.appendChild(this.todoList.render("Todo"));
        this.notTodoList.render("Not Todo");

        return this.TodoContainer;
    }
}