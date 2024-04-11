
import TodoListItem from '../TodoListItem/TodoListItem'
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    console.log(todos, 'lojhlygktrdfvgbhjuik');
  return (
    <div>
    {todos?.map(td =>  <TodoListItem {...td}/>     ) }
    </div>
  )
}

export default TodoList