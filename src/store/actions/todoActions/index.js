import { ADD_NEW_TODO } from "../../types/todoTypes"


export const addTodo = (todo) => {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}