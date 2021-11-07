import React, { useReducer, useRef, useState } from 'react';
import './TodoForm.css';

const TodoForm = ( { onAdd } ) => {
    const textRef = useRef()
    const [text,setText] = useState('')
    const chageInput = (e) => {
        const {value} = e.target
        setText(value)
    } 
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return    //text 값이 공백이면 정지 

        onAdd(text)  //실질적 add text 값 전달
        setText('') //공백처리
        textRef.current.focus() //포커스
    }

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={chageInput} ref={textRef}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;