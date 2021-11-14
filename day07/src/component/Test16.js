import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test16 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect( () => {
        const getData = async() => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
                setData(res.data)
                setError(null)
                setLoading(true)    //일단 로딩
            }catch(e){
                setError(e) //에러시
            }
            //로딩 완료 후
            setLoading(false)
        }
        getData()
    },[])

    //if문을 따로 빼서 작업
    if( loading ) return <h2>로딩중...</h2>
    if( error ) return <h2>에러가 발생했습니다...</h2>
    //데이터가 존재하지 않으면?
    if(!data) return null

    return (
        <div>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test16;