/**
 * 제일 작은 단위 ; KItem KanbanItem
 */
export interface KItem {
    id: number;
    reg: string;
    mod?: string;
    content:{
        title: string,
        content: string
    }
    completed: boolean
}


export interface KItemList {
    id: number;
    name: string;
    list: KItem[];
}

export type elProps = {
    createEl: string,
    class?: string[],
    inner?: string,
    props?: {[key in string]: string | number | boolean}
}
