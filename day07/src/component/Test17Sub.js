import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test17SUb = () => {
    const [todo, setTodo] = useState({})
    const [id, setId] = useState(1)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState('')
    const [num, setNum] = useState(1)


    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`
        axios.get(url)
             .then( res => {
                 setTodo(res.data)
                 setLoading(false)
                 setError('')
             })
             .catch( error => {
                setTodo({})
                setLoading(true)
                setError('데이터를 찾을 수 없습니다.')
             })
    },[num])

    const onNum = () => {
        setNum(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={onNum}>검색</button>
            {
                <h2>{todo.title}</h2>
            }
        </div>
    );
};

export default Test17SUb;