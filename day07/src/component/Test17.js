import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test17 = () => {
    const [todo, setTodo] = useState({})
    const [id, setId] = useState(1)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState('')


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
    },[id])


    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            {
                <h2>{todo.title}</h2>
            }
        </div>
    );
};

export default Test17;