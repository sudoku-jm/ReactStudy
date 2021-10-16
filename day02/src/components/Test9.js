import React, { useState } from 'react';

const Test9 = () => {
    // *state값은 값을 유동적으로 바뀔 때 사용 할 것.
    //초기값 : 숫자, 문자, 논리, 객체, 배열
    const [ name, setName ] = useState('홍길동')
    const [ color, setColor ] = useState('red')

    const onName1 = () => {
        setName('이익준')
    }
    
    const onName2 = () => {
        setName('이익순')
        
    }
    
    const onName3 = () => {
        setName('이우주')
    }


    return (
        <>
            <h2 style={{color:color}}> useState </h2>
            <h3>이름: {name}/ 컬러: {color} </h3>
            <p>
                <button onClick={onName1}>이익준</button>
                <button onClick={onName2}>이익순</button>
                <button onClick={onName3}>이우주</button>
            </p>
            <p>
                <button onClick={ () => setColor('pink') }>pink</button>
                <button onClick={ () => setColor('tomato') }>tomato</button>
                <button onClick={ () => setColor('skyblue') }>skyblue</button>
            </p>
        </>
    );
};

export default Test9;

/* 
    React.useState , useState
    
    import React , {useState} from 'react';
    const [count, setCount] = useState(0);
    const [count, setCount] = React.useState(0);
    
    *state값은 값을 유동적으로 바뀔 때 사용.    


    선언하고 유지한다.
    const [count, setCount] = React.useState(0);
    값이 변경될 때
    const [상태변수, 상태변수변경을 도와주는 함수] = useState(초기값);
    const [변수, 함수] = useState(초기값);

    변수 = 값
    함수( 값 ) => 변수
    const [상태데이터, 상태를 위한 setter함수] = useState(초기값);
    const [상태데이터명, set + 첫글자대문]  = useState(초기값);


*/