import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test15 = () => {

    const [data, setData] = useState([])    //초기값 배열
    const [loading , setLoading] = useState(true)   //loading초기값 true
    const [error, setError] = useState('')

    //useEffect로 외부 데이터 불러옴
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( res => {
            setData(res.data)
            setLoading(false)
            setError('')
        })     //응답완료
        .catch( error => {
            setData([])
            setLoading(true)
            setError('데이터를 찾을 수 없습니다.')
        })    //응답실패
    },[])

    return (
        <div>
            {   
                //data와 loading true일 때(loading초기값 true)
                data && loading ? <h2>로딩중...</h2> :  
                data.map( item => <p key = {item.id}>
                    {item.id} / {item.title}
                </p>)
            }
            <p>
                {
                    //error에 값이 들어가면 출력.
                    error ? error : null
                }
            </p>
        </div>
    );
};

export default Test15;