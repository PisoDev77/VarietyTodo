import { KItem } from "../type";
import { getEl } from "../util";


export function Kanban(todo: KItem, title: string){
    const kanban = getEl({
        createEl: "div",
        class:["self-kanban"]
    });


    const headerWrapper = getEl({
        createEl: "div",
        class:["flexRow"],
    });

        const header = getEl({
            createEl: "h3",
            class:["self-kanban-header"],
            inner: title
        });
        const delKanban = getEl({
            createEl: "button",
            class: ["self-kanban-delete"],
            inner:"X"
        });
    headerWrapper.appendChild(header);
    headerWrapper.appendChild(delKanban);


    const contentWrapper = getEl({
        createEl: "div",
        class:["flexRow"],
    });
    
        const kitem = getEl({
            createEl: "div",
            class:["self-kanban-item"],
            inner: todo.content.content
        });
        
        const kitemEdit = getEl({
            createEl: "button",
            class:["self-kanban-item-edit"],
            inner: "수정"
        });
        const kitemDel = getEl({
            createEl: "button",
            class:["self-kanban-item-delete"],
            inner:"삭제"
        });
    contentWrapper.appendChild(kitem);
    contentWrapper.appendChild(kitemEdit)
    contentWrapper.appendChild(kitemDel)


    kanban.appendChild(headerWrapper);
    kanban.appendChild(contentWrapper);


    const getKanban = () => {
        return kanban;
    };

    return {
        getKanban
    };
}