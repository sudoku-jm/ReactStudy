import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {
    const [data , setData] = useState([
       // {id : 1 , text:'test' , isChecked:true }
    ])
    const no = useRef(1)
    

    //추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id : no.current++,
                text,
                isChecked : false
            }
        ])
    }

    //삭제
    const onDel = (id) => {
        setData( data.filter( list => list.id !== id))
    }

    //체크
    const onToggle = (id) => {
        setData( data.map(list => list.id === id ? {
            ...list,
            isChecked : !list.isChecked
        } : list))
    }

    return (
        <div class="wrap">
            <h1>To Do List</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;