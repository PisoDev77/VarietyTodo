import { getEl } from "../util";

const head = getEl({
    createEl:"h2",
});

export function Header(){
   
    const setHead = (str: string) => {
        head.innerText = str;
    }
    const getHead = () => {
        return head;
    }

    return {
        setHead,
        getHead
    };
}