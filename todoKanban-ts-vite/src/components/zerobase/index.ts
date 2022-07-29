import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./type";

export class KanbanApp{

    list: TodoList[];

    constructor(data: TodoList[]){
        this.list = data;

        this.render();
        this.attachEvent();
    }

    render(){
        const addListButton = document.createElement("button");
        addListButton.classList.add("board", "add");
        addListButton.innerHTML = `<span class='plus-btn blue'>+</span>`;

        const board = document.querySelector(".todo-container");

        if(board){
            board.innerHTML = ``;

            const fragment = document.createDocumentFragment();
            const listElements = this.list.map((list) => this.generateList(list));

            fragment.append(...listElements);
            board.append(fragment, addListButton);
        }

    }

    attachEvent(){
        const $addListButton = document.querySelector('.board.add');

        $addListButton?.addEventListener('click', ()=>{
            const newId = uuidv4();
            this.list = [
                ...this.list,
                {
                    id: newId,
                    title: `kanban-${newId}`,
                    list: []
                }
            ]
        });

        this.render();

    }
    
    generateList({id, title, list}: TodoList){
        const $list = document.createElement("section");
        $list.classList.add("board");

        //add Todo btn
        const addButtonElement = `
        <section class="todo">
            <button class="todo-item add" id="add-todo-${title}">
                <span class="plus-btn blue"></span>
            </button>
        </section>
        `;

        const listHTML = list?.map(({id: todoId, content, tags})=>{
            return `
                <section class="todo" id="${title}+${todoId}">
                    <div class ="todo-item">
                        <div class="wrapper">
                            <div class="item-header">
                                <div class="item-title">
                                    <span class="item-title-icon"></span>
                                    <div class="title">${content ? content.title : ""}</div>
                                </div>
                                <div class="todo-control">
                                    <button class="delete-tiem" id="delete-todo-${todoId}">
                                        <span class="delete-btn"></span>
                                    </button>   
                            </div>
                        </div>  

                        <div class="todo-content">${content ? content.body : ''}</div>
                    </div>

                    <div class="tags">
                        ${
                            tags &&
                            tags.map(({id: tagId, content})=>{
                                return `
                                    <span class="tag" id="tag-${todoId}">
                                        ${content}
                                        <button class="delete-tag delete-btn" id="todo-delete-${tagId}></button>
                                    </span
                                `
                            })
                            .join('')
                        }

                        <div class="tag add-tag-btn">
                            <span contentEditable>태그</span>
                            <button class="add-btn" id="todo-${todoId}"></button>
                        <div>

                    </div>
                </section>
            `;
        })
        .join('');

        const $item = `
            <section class='board-title'>
                <div class="board-header">
                    <div class='total'><span id="todo-count">${list?.length ?? 0}</span></div>
                    <h2 class="title">${title}</h2>
                </div>

                <div class="board-control">
                    <button class='kanban-delete' id="kanban-${id}"><span class="delete-btn"></span></button>
                </div>

            </section>

            <div class="wrapper">
                ${addButtonElement}
                ${list?.length ? listHTML : ""}
            </div>
            `;

            $list.innerHTML = $item;

            return $list;
    }
}