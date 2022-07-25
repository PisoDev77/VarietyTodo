
/**
 * @import 
 * 
 */

class TodoApp {
    
    /**
     * @type {HTMLDivElement} TodoContainer // todo-container 객체
     * @type {TodoNav} todoNav // todo-nav 객체
     * @type {TodoList} todoList // todo-list 객체
     * @type {TodoList} notTodoList // todo-list 객체
     * @type {TodoForm} todoForm // todo-Form 객체
     * @type {TodoEvents} todoForm // todo-Form 객체
     */

    TodoContainer;    

    todoNav;
    todoList;
    notTodoList;
    todoForm;

    todoEvents;
    
    /**
     * @constructs TodoApp
     */
    constructor(){}


    initEvent(){}

    /**
     * 
     * @returns {HTMLDivElement} 
     */
    render(){
        // todo-cotainer render
        this.TodoContainer.id = "todo-container";
        this.TodoContainer.appendChild(this.todoNav.getTodoNav());
        this.TodoContainer.appendChild(this.todoList.render("Todo"));
        this.TodoContainer.appendChild(this.todoForm.getTodoForm());

        return this.TodoContainer;
    }
}