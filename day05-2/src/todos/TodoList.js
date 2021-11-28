import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ( { data , onDel, onToggle} ) => {
    return (
        <ul class="list">
            {
                data.map( list => <TodoItem key={list.id} list={list} onDel={onDel} onToggle={onToggle}/>)
            }
        </ul>
    );
};

export default TodoList;