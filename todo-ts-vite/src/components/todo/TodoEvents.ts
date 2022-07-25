import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

import { TodoType } from "./Types";

export class TodoEvents {


    TodoContainer: HTMLDivElement;

    todoForm: TodoForm;
    todoList: TodoList;
    notTodoList: TodoList;

    activeList: TodoList;


    constructor(con: HTMLDivElement, form: TodoForm, list: TodoList, nottodolist: TodoList){
        this.TodoContainer = con;
        this.todoForm = form;
        this.todoList = list;
        this.notTodoList = nottodolist;

        this.activeList = this.todoList;

        this.initEvent();
    }

    todoClickEvent(){
        this.TodoContainer.addEventListener("click", (e)=>{
            const target = <HTMLElement>(e.target as EventTarget);
            const cmd = target.id;

            // console.log(cmd);

            if(cmd === "todo-add-button"){
                const content = <HTMLInputElement>target?.previousElementSibling;
                if(content){
                    if(content.value.trim()){
                        const props: TodoType = {
                            id: undefined,
                            content: content.value
                        }
                        this.activeList.addTodo(props);
                        content.value = "";
                        }
                }
            }

            if(cmd === "todo-nav-item"){
                const todoListNode = this.TodoContainer.lastChild;
                if(todoListNode){
                    
                    if(target.innerText === "Not Todo"){
                        this.notTodoList.setHeaderTodolist(target.innerText);
                        this.TodoContainer.replaceChild(this.notTodoList.getListEl(),todoListNode);
                        this.activeList = this.notTodoList;
                    }
    
                    if(target.innerText === "Todo"){
                        this.todoList.setHeaderTodolist(target.innerText);
                        this.TodoContainer.replaceChild(this.todoList.getListEl(),todoListNode);
                        this.activeList = this.todoList;
                    }
                    
                }
                
            }

            if(cmd === "todo-delete-button"){
                const con = <HTMLDivElement>target.previousSibling?.previousSibling;
                if(con){
                    this.activeList.deleteTodo(Number(con.id));
                    this.activeList.renderTodos();
                }
            }

            if(cmd === "todo-edit-button"){
                const todo = <HTMLDivElement>target.previousSibling;

                if(todo){
                    this.activeList.editTodo(Number(todo.id));
                    this.activeList.renderTodos();
                }
            }

            if(cmd === "todo-edit-cancel"){
                this.activeList.cancelEdit();
            }

            if(cmd === "todo-edit-confirm"){
                const todo = <HTMLDivElement>target.previousSibling;

                if(todo){
                    this.activeList.doEdit();
                }
                
            }
        });


    }


    todoFormEvent(){
        this.todoForm.getContentInput().addEventListener("keydown", (e) => {
           
            const content = <HTMLInputElement>(e.target as EventTarget);
            
            if(content.value.trim()){
                if(e.key === "Enter"){
                    const props: TodoType = {
                        id: undefined,
                        content: content.value
                    }
                    this.activeList.addTodo(props);
                    content.value = "";
                }
            }
        });
    }


    initEvent(){
        
        this.todoClickEvent();
        this.todoFormEvent();
        

    }

}