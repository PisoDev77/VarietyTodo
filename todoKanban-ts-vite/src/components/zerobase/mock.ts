import { TodoList , Todo, DoneTodo, inProgressTodo } from "./type"

export const todoList:Todo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: false,
        category: 'to-do',
        tags:[{id:0,content:"TAG 1"}],
    },
]

export const inProgressList: inProgressTodo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: false,
        category: 'in-progress',
        tags:[{id:0,content:"TAG 1"}],
    }
]

export const doneList: DoneTodo[] = [
    {
        id:0,
        content: {title: "제목", body: "내용"},
        isDone: true,
        category: 'done',
        tags:[{id:0,content:"TAG 1"}],
    }
]

export const defaultKanban: TodoList[] = [
    {id:0, title: "To do", list: todoList},
    {id:0, title: "In progress", list: inProgressList},
    {id:0, title: "Done", list: doneList},
]