import { Kanban, Todo } from "./type"

export const todoList:Todo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: false,
        category: 'to-do',
        tags:[{id:0,content:"TAG 1"}],
    },
]

export const inProgressList: Todo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: false,
        category: 'in-progress',
        tags:[{id:0,content:"TAG 1"}],
    }
]

export const doneList: Todo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: false,
        category: 'done',
        tags:[{id:0,content:"TAG 1"}],
    }
]

export const defaultKanban: Kanban[] = [
    {id:0, title: "To do", todos: todoList},
    {id:0, title: "In progress", todos: inProgressList},
    {id:0, title: "Done", todos: doneList},
]