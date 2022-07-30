import { getEl } from "../util";

export function AddBtn(){
    const addBtn = getEl({
        createEl: "button",
        inner: "+",
        class: ["self-add-kanban"]    
    });

    const getAddBtn = () => {
        return addBtn;
    }

    return {
        getAddBtn  
    };
}