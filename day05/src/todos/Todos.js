import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {
    const [data,setData] = useState([
        // {id : 1, text : '일요일입니다', isChecked : true },
    ])
    const no = useRef(1)
    // 삭제
    const onDel = (id) => {
        // alert(`삭제 ${id}`)
        setData( data.filter(item => item.id !== id))
    }

    //추가
    const onAdd = (text) => {
        // alert('추가!');
        setData([
            ...data,
            {
                id : no.current++ , 
                text, 
                isChecked : false
            }
        ])

        // setData(data.concat({id : no.current++ , text}))
    }

    //isChecked : true / false

    const onToggle = (id) => {
        // 체크 시 li태그 on 넣음
        // map으로 전체 검사 - 클릭한 것만 골라서 바꿔줌(id 값이 같은 것)
        setData( data.map(item => 
            item.id === id ?    //id값 같은지 검사
            {
                ...item, 
                isChecked : !item.isChecked 
            } : item))
    }

    return (
        <div className="Todos">
            <h1>할일 만들기</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;