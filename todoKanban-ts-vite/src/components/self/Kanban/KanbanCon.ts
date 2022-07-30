import { KItemList } from "../type";
import { getEl } from "../util";
import { Kanban } from "./Kanban";

import { todoList, notTodoList } from "./mock";


export function KanbanCon(){

    const kanbans = [todoList, notTodoList];

    const con: HTMLElement = getEl({
        createEl: "div",
        class:["self-kanban-container"]
    })


    const render = (thisCon: HTMLElement) => {

        kanbans.map((kanban) => {
            console.log("aa");

            const name = kanban.name;
            kanban.list.map((todo) => {
                const k = Kanban(todo, name);
                thisCon.appendChild(k.getKanban());
            });
        });
    }
    render(con);

    
    const addKanban = () => {
        const newKanban: KItemList = {
            id: 2,
            name: "ADD KANBAN",
            list: [
                {
                    id: 0,
                    reg: "22-07-31",
                    mod: undefined,
                    content:{
                        title: "EXAM 1",
                        content: "ADD EXAM CONTENT"
                    },
                    completed: false,
                }
            ]
        }


        kanbans.push(newKanban);
    }

    const getCon = () => {
        return con;
    }

    
    return {
        getCon,
        addKanban,
        render
    };
}