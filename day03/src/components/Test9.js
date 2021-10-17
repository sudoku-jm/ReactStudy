import React, { useState } from 'react';

const Test9 = () => {

    const [data, setData] = useState([])
    // [{id:1, name:'홍길동'},{id:2, name:'강호동'},]
    

    const onAdd1 = () => {
        setData( data.concat({id : data.length , name : '홍길동' + Math.floor(Math.random() * 10)}))
    }

    const onAdd2 = () => {
        const newData = data.concat( {id:data.length, name:'강호동'+Math.floor( Math.random() * 10 )})
        setData(newData)
    }

    const onAdd3 = () => {
        setData([
            ...data,
            {
                id : data.length,
                name : '조정석'+ Math.floor(Math.random() * 10)
            }
        ])
    }

    const onAdd = () => {
        const newData = { id : data.length, name:'조우주' + Math.floor(Math.random() * 10)}
        setData([...data,newData])
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

export default Test9;