import { Header } from "./Kanban/Header";
import { getEl } from "./util";
import { KANBANTITLE } from "./Const";
import { AddBtn } from "./Kanban/AddBtn";
import { KanbanCon } from "./Kanban/KanbanCon";

export function Kanban(){


    const selfHeader = Header();
    const setHeader = () =>{
        selfHeader.setHead(KANBANTITLE);
    }
    setHeader();


    const addBtn = AddBtn();


    const selfKanbanCon = KanbanCon();

    
    const render = (con: HTMLDivElement) => {
        con.replaceChildren();
        const selfContainer:HTMLElement = getEl({
            createEl:"div",
            class: ["self-container"]
        });

        selfContainer.appendChild(selfHeader.getHead());
        selfContainer.appendChild(addBtn.getAddBtn());
        selfContainer.appendChild(selfKanbanCon.getCon());

        con.appendChild(selfContainer);


        selfContainer.addEventListener("click", (e) => {
            const target = e.target;
            
            const cmd = (target as HTMLElement).classList;
            
            if(cmd.contains("self-add-kanban")){
                selfKanbanCon.addKanban();
                selfKanbanCon.getCon().replaceChildren();
                selfKanbanCon.render(selfKanbanCon.getCon());
            }
            
        });
    };
    

    return {
        render,

    };
}