import React, { useRef, useState } from 'react';

const Test1 = () => {
    const no = useRef(1)
    const [data, setData] = useState([])    //배열로 담기
    const names = '차학연,정택운,이재환,김원식,이홍빈,한상혁,홍길동,강호동,이승철,하하,이승기,이효리,제시,화사,엄정화,김도현,고민지,전지현,송지아,유재석'.split(',')
    // mdn string 객체의 문자열 배열처리로...
    // const arr = names.split(',')
    // console.log(arr)
    const onAdd = () => {
        //1. 이름을 랜덤으로, id 고유번호 useRef
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                // id : data.length,
                //data가 중간에 삭제되거나하면 문제가 생기므로 이렇게 한다.
                id : no.current++,
                text : names[ran]
            }
        ])

    }

    return (
        <div>
            <h2>고유번호 처리</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test1;