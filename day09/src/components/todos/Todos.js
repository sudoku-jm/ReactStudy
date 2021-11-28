import React, { useContext, useState } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    const {} = useContext(TodosContext)
    
    const [data,setData] = useState([])

    //추가
    const onAdd = (form) =>{
        setData(form)
    }

    return (
        <div>
            <h1>할 일 만들기</h1>
            {/* <h2>카운트 : </h2> */}
            <TodoInput/>
            <TodoList/>
        </div>
    );
};

export default Todos;