
export class TodoNav{

    private navItems: string[];
    
    private todoNav: HTMLDivElement;

    constructor(){
        this.navItems = ["Todo","Not Todo"];
        this.todoNav = <HTMLDivElement>document.createElement("nav");
    }

    private setTodoNav(){
        this.todoNav.id = "todo-nav";
        
        this.navItems.map((itemStr) => {
            const navItem = document.createElement("div");
            navItem.id = "todo-nav-item";
            navItem.innerText = itemStr;
            this.todoNav.appendChild(navItem);
        });
    }
   
    getTodoNav(){
        this.setTodoNav();
        return this.todoNav;
    }
}