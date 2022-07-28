import './style.css';
import {divEl, aEl} from "./components/Types";

import {KanbanApp as zbKanban} from "./components/zerobase/index";
import {Kanban as selfKanban} from "./components/self/Kanban";
import { defaultKanban } from './components/zerobase/mock';

type isZero = "zerobase" | "self";

const app = <divEl>document.querySelector("#app");

const nav = document.createElement("nav");
// const kanban = document.createElement("div");

const zb = new zbKanban(defaultKanban);

for(let i = 0 ; i < 2 ; i++){
    const str: isZero = i === 0 ? "zerobase" : "self";
    const a = document.createElement("a")
    a.innerText = str.toUpperCase();
    nav.appendChild(a);

    a.addEventListener("click", (e:MouseEvent)=>{
        const target = <aEl>e.target;
        if(target){
            str === "zerobase" ?  zb.render() : selfKanban();
        }
    });
}   
app.prepend(nav);
// app.appendChild(kanban);
