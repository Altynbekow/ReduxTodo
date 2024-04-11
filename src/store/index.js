import {createStore, combineReducers} from "redux";
import todoReducer from "./reduccer/todoReducer";

const rootReducer = combineReducers({

    todos: todoReducer
})
const store = createStore(rootReducer)

export default store