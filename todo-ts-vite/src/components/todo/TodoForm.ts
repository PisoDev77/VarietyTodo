
export class TodoForm {

    private TodoForm: HTMLDivElement;
    private content: HTMLInputElement;
    private btn: HTMLButtonElement;

    constructor(){
        this.TodoForm = <HTMLDivElement>document.createElement("div");
        this.content = <HTMLInputElement>document.createElement("input");
        this.btn = <HTMLButtonElement>document.createElement("button");

        this.btn.id = "todo-add-button";

        this.init();
    }

    setInputContent(props: {type: string, name: string, placeholder: string}){
        this.content.id = "todo-form-content";
        this.content.type = props.type;
        this.content.name = props.name;
        this.content.placeholder = props.placeholder;
    }

    setBtn(){
        this.btn.innerText = "ADD";
    }

    getContentInput(){
        return this.content;
    }

    getTodoForm(){
        return this.TodoForm;
    }

    private init(){
        this.TodoForm.id = "todo-form"
        
        this.setInputContent({
            type: "text",
            name: "content",
            placeholder: "Write Todo"
        });
        this.setBtn();

        this.TodoForm.appendChild(this.content);
        this.TodoForm.appendChild(this.btn);
    }
}