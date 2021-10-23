import React, { useState } from 'react';

const RandomAdd3 = () => {
    const [data,setData] = useState([])
    /* 
        [
            {id : 1, name : '홍길동'},
            {id : 2, name : '강호동'}
        ]
    */

    const onAdd = () => {
        console.log(data)
        const newData = data.concat({id:data.length, name:'강호동' + Math.floor(Math.random() * 10)})
        console.log(newData)
        setData(newData)
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

export default RandomAdd3;