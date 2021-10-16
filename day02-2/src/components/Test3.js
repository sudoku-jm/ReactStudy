import React from 'react';


const Child = ( {name, age, addr, isLog, color} ) => {
    return (
        <>
            <ul style={{padding:`20px 60px`,backgroundColor:`${color}`}}>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>로그인여부 : {isLog ? '로그인중' : '로그아웃함'}</li>
            </ul>
        </>
    )
}

const Test3 = () => {

    const title = '리액트 props 값 전달'
    return (
        <>
        <div style={{margin:20,padding:20,border:'1px solid #ccc'}}>

            <strong>{title}</strong>
            <p>부모 컴포넌트에서 자식 컴포넌트에 값을 전달 하는 것</p>  

            <Child 
                name = "홍길동"
                age = {25}
                addr = "서울시"
                color = "lightBlue"
                isLog = {true}
            />
        </div>
        </>
    );
};

export default Test3;