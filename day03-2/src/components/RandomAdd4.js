import React, { useState } from 'react';

const RandomAdd4 = () => {
    const [data,setData] = useState([])
    /* 
        [
            {id : 1, name : '홍길동'},
            {id : 2, name : '강호동'}
        ]
    */

    const onAdd = () => {
       setData([
           ...data, // 기존데이터
           {
               id : data.length,
               name : '조정석' + Math.floor(Math.random() * 10)
           }
       ])
       //setData([...data,newData])
       //...data , newData
       //기존 리스트 , 새 데이터 추가
    }

    return (
        <div>
            <h2>데이터 추가</h2>
            <p>
                <button onClick={onAdd}>추가</button>
            </p>
            <hr/>
            {
                data.map( (item,index) => <p key={index}>{item.id} / {item.name}</p> )
            }
        </div>
    );
};

export default RandomAdd4;