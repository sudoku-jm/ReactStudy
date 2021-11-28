import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const TodoItem = ({todo}) => {
    const {id, text, isChecked} = todo
    const { onDel } = useContext(TodosContext)
    const { onToggle } = useContext(TodosContext)
    return (
        <li style={{marginBottom:5,textDecoration:isChecked ? 'line-through' : ''}}>
            <input type="checkbox" onChange={() => onToggle(id)} checked={isChecked}/>
            {text}
            <button onClick={() => onDel(id)} style={{marginLeft:10}}>삭제</button>
        </li>
    );
};

export default TodoItem;