import { TodoType } from "./Types"

export class Todo {

    private Todo: HTMLDivElement;
    private id?: number;

    private contentEl: HTMLDivElement | HTMLInputElement;

    private editBtn: HTMLButtonElement;
    private delBtn: HTMLButtonElement;

    private tmpContent: string;

    constructor(props: TodoType){
        this.Todo = <HTMLDivElement>document.createElement("section");
        this.id = props.id;

        this.contentEl = document.createElement("div");

        this.editBtn = document.createElement("button");
        this.delBtn = document.createElement("button");
        this.tmpContent = "";

        this.initTodo(props);
    }

    initTodo(props:TodoType){
        
        this.contentEl.innerText = props.content;
        this.contentEl.id = String(this.id);
        
        this.delBtn.innerText = "X";
        this.delBtn.id = "todo-delete-button";   
        
        this.editBtn.innerText = "EDIT";
        this.editBtn.id = "todo-edit-button";  

        this.Todo.appendChild(this.contentEl);
        this.Todo.appendChild(this.editBtn);
        this.Todo.appendChild(this.delBtn);

    }

    editMode(){
        const replaceChild = this.Todo.firstChild;
        if(replaceChild){
            const inputContentEl = document.createElement("input"); 
            inputContentEl.type="text";
            this.tmpContent = this.contentEl.innerText;
            inputContentEl.value=this.tmpContent;
            inputContentEl.id = String(this.id);

            this.Todo.replaceChild(inputContentEl, replaceChild);
            
            this.editBtn.innerText = "수정";
            this.delBtn.innerText = "취소"

            this.editBtn.id = "todo-edit-confirm";
            this.delBtn.id = "todo-edit-cancel";
        }
    }

    chanageBtns(divContentEl: HTMLDivElement, replaceChild: ChildNode){
        this.Todo.replaceChild(divContentEl, replaceChild);
            
        this.editBtn.innerText = "EDIT";
        this.delBtn.innerText = "X";

        this.editBtn.id = "todo-edit-button";
        this.delBtn.id = "todo-delete-button";
        
    }
    doEdit(){
        const replaceChild = <HTMLInputElement>this.Todo.firstChild;
        if(replaceChild){
            const divContentEl = document.createElement("div");
            this.contentEl = divContentEl; // 요 부분이 문제였음
            divContentEl.innerText = replaceChild.value;
            divContentEl.id = String(this.id);

            this.chanageBtns(divContentEl, replaceChild);
        }        
    }
    cancelEdit(){
        const replaceChild = this.Todo.firstChild;
        if(replaceChild){
            const divContentEl = document.createElement("div");
            divContentEl.innerText = this.tmpContent;
            divContentEl.id = String(this.id);

            this.chanageBtns(divContentEl, replaceChild);
        }
    }

    getTodo(){
        return this.Todo;
    }

    getId(){
        return this.id;
    }
}