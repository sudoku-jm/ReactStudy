import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test14 = () => {
    const [data, setData] = useState([])

    //useEffect가 외부 데이터 들고 올 때 사용

    //방법1 : fetch
    /* useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        // .then( res => console.log(res))
        .then( res => res.json() )
        .then( res => setData( res ))
    },[]) */

    //방법2 : axios
    /* useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then( res => console.log(res)) 
        .then( res => setData( res.data) )
    },[]) */

    //방법3 : async,await
   /*  useEffect( () => {
        const getData = async() => {    //함수를 한 번 만들고
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()   //json으로 변환
            setData(data)   //사용
        } 

        getData()   //만든 함수 호출
    },[])
 */

    //방법4 :  async, axios
    useEffect( () => {
        const getData = async () => {   //함수 만들고
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)   // axios로 가져와서 바로 객체로 사용
        }   
        getData()   //함수 호출
    },[])


    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test14;

/* 
    Ajax : 서버에 새로고침없이 요청할 수 있게 도와줌
            서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해줌.

    1. jquery : $.ajax()
    2. js - fetch()
    3. axios설치 - axios.get()

    fetch(데이터요청url , [options])
    fetch('주소')
    .then( 콜백) - 응답완료
    .catch( 콜백) - 응답실패
    : json파일 가져오기하면 json형태 그대로 가져옴


    =================================================================
    axios : 백엔드와 프론트엔드 통신을 쉽게 하기 위해 사용
    json을 Object로 알아서 바꿔줌

    axios.get(url)
         .then( (가져온자료) => { }) 응답완료
         .catch( () => { }) 응답실패
*/