import React, { createContext, useMemo, useRef, useState } from 'react';

export const TodosContext = createContext()

const TodosProvider= (props) => {
    const [todos, setTodos] = useState([
        {id : 1 , text:'홍길동', isChecked : false},
        {id : 2 , text:'전지현', isChecked : true},
        {id : 3 , text:'고민지', isChecked : false},
        {id : 4 , text:'유재석', isChecked : true},
        {id : 5 , text:'김도현', isChecked : false},
    ])
    
    const [text, setText] = useState('')
    const no = useRef(todos.length + 1)

    //삭제
    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //체크
    const onToggle = (id) =>{
        const newData = todos.map( todo => todo.id === id? {
            ...todo,
            isChecked : !todo.isChecked
        } : todo)
        setTodos(newData)   
    }

    //추가
    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id : no.current++,
                text,
                isChecked : false
            }
        ])
        setText('')
    }

    //글자 입력
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    //용량 부하를 막고, 바뀌는 것만 체크하기위해 useMemo사용
    const value = useMemo( () => ({ todos , onDel, onToggle , text, changeInput, onAdd}),[todos , onDel, onToggle , text, changeInput, onAdd])

    return (
        <TodosContext.Provider value={value}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosProvider;