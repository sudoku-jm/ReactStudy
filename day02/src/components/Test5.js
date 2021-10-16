import React from 'react';


//컴포넌트 첫글자 대문자
const Sub = ({ msg, name, age, addr ,tel ,color, isLog }) => {
    return (
        <div style={{border : `2px solid ${color}`, padding:20, margin:20}}>
            <h2 style={{backgroundColor:color}}>{msg}</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>컬러 : {color}</li>
                <li>로그인여부 : {isLog ? '로그인' : '로그아웃'}</li>
            </ul>
        </div>
    );
};


const Test5 = () => {

    const title = 'props 값 전달연습( 부모 -> 자식 )'
    return (
        <>
            {/* 
                props명 = props값
            */}
            <Sub 
                msg = {title}
                name = "이익준"
                age = {35}
                addr = "서울시 서초구 서초동"
                tel = "010-0000-1111"
                color = "tomato"
                isLog = {true}  
            />
        </> 
    );
};

export default Test5;