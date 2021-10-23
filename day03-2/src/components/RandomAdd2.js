import React, { useState } from 'react';

const RandomAdd2 = () => {
    const [data,setData] = useState([])
    /* 
        [
            {id : 1, name : '홍길동'},
            {id : 2, name : '강호동'}
        ]
    */

    const onAdd = () => {
        /* 
        concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 

        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);

        ==> ["a", "b", "c", "d", "e", "f"]
        */
        // console.log(data)
        setData( data.concat({id : data.length, name:'홍길동'+Math.floor(Math.random() * 10)}))
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

export default RandomAdd2;