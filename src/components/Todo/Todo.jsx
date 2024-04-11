import React from 'react'
import TodoAdd from './TodoAdd/TodoAdd'
import TodoList from './TodoList/TodoList'

const Todo = () => {
    return (
        <div>Todo
            <TodoAdd />
            <TodoList />
        </div>
    )
}

export default Todo