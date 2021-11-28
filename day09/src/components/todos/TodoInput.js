import React, { useContext, useRef, useState } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const TodoInput = () => {
    const {onAdd , changeInput , text} = useContext(TodosContext)
    const refId = useRef()
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        onAdd(text)
        // setText('')
        refId.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} ref={refId} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;