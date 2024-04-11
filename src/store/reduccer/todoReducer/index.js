import { ADD_NEW_TODO } from "../../types/todoTypes";


const todoState = {
    todos: [

    ]
}

const todoReducer = (state = todoState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_NEW_TODO:
            return {
                todos: [...state.todos, payload]
            }

            default: return state
    }
}

export default todoReducer;