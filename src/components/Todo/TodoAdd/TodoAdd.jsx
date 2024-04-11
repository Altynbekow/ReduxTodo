


import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/actions/todoActions';

const TodoAdd = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');

    const handleClick = () => {
        const newTodo = {
            text: text,
            number: number
        };
        console.log(newTodo);
        dispatch(addTodo(newTodo));
    };

    return (
        <div>
            <input
                onChange={(evt) => {
                    setText(evt.target.value)}
                }
                type="text"
                placeholder='add new todo'
            />
            <input
                onChange={(evt) => {
                    setNumber(evt.target.value)}
                }
                type="text"
                placeholder='Number'
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default TodoAdd;
