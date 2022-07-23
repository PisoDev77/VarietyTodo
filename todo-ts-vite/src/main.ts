import './style.css';
import { TodoApp } from './components/TodoApp';

const app = document.querySelector<HTMLElement>("#app");

const cssMode = () =>{
    const btn = document.createElement("button");
    btn.innerText = "css모드";
    app?.appendChild(btn);

    btn.addEventListener("click", (e: MouseEvent) => {
        if(darkMode){
            body?.classList.replace("def", "dark");
        }else{
            body?.classList.replace("dark", "def");
        }
        darkMode = !darkMode;
    });
}

cssMode();
const todoApp = new TodoApp();
app?.appendChild(todoApp.render())

const body = document.querySelector("body");
let darkMode = true;
body?.classList.add("def");