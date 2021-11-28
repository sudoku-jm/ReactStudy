import React, { useRef, useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
    const textRef = useRef()
    const [text,setText] = useState('')
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit} class="input_area">
            <input value={text} onChange={changeInput} type="text" ref={textRef}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;