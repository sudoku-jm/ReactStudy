import React from 'react';

const TodoItem = ( { list , onDel, onToggle } ) => {
    const {id , text, isChecked} = list
    return (
        <li className={isChecked? 'on' : ''}>
            <span onClick={() => onToggle(id)}>&#10003;</span>
            <em onClick={() => onToggle(id)}>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;