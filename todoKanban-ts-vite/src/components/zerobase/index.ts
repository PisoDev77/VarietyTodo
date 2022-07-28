import { TodoList } from "./type";

export class KanbanApp{

    list: TodoList[];

    constructor(data: TodoList[]){
        this.list = data;

        this.render();
    }

    render(){
        const addListButton = document.createElement("button");
        addListButton.classList.add("board", "add");
        addListButton.innerHTML = `<span class='plus-btn blue'>+</span>`;

        const board = document.querySelector(".todo-container");

        if(board){
            board.innerHTML = ``;

            const fragment = document.createDocumentFragment();
            // const listElements = this.list.map((list) => generateList(list));

            fragment.append();
            board.append(fragment, addListButton);
        }

    }
    
}