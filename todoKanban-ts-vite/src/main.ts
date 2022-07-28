import './style.css';
import {divEl, aEl} from "./components/Types";

import {Kanban as zbKanban} from "./components/zerobase/Kanban";
import {Kanban as selfKanban} from "./components/self/Kanban";

type isZero = "zerobase" | "self";

const app = <divEl>document.querySelector("#app");

const nav = document.createElement("nav");
const kanban = document.createElement("div");

for(let i = 0 ; i < 2 ; i++){
    const str: isZero = i === 0 ? "zerobase" : "self";
    const a = document.createElement("a")
    a.innerText = str.toUpperCase();
    nav.appendChild(a);

    a.addEventListener("click", (e:MouseEvent)=>{
        const target = <aEl>e.target;
        if(target){
            // app.appendChild(nav);
            str === "zerobase" ? zbKanban() : selfKanban();
        }
    });
}   
app.appendChild(nav);
app.appendChild(kanban);
