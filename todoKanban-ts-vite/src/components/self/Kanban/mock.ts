import {KItemList} from "../type";

const todoList: KItemList = {
    id: 0,
    name: "Todo",
    list: [
        {
            id: 0,
            reg: "22-07-31",
            mod: undefined,
            content:{
                title: "EXAM 1",
                content: "TODO EXAM CONTENT"
            },
            completed: false,
        }
    ]
}

const notTodoList: KItemList = {
    id: 1,
    name: "NotTodo",
    list: [
        {
            id: 0,
            reg: "22-07-31",
            mod: undefined,
            content:{
                title: "EXAM 1",
                content: "NOTTODO EXAM CONTENT"
            },
            completed: false,
        }
    ]
}

export {
    todoList,
    notTodoList
}