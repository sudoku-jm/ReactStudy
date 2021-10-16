import React from 'react';

/* 
    props는 아래 <TestSub4 name="~~",...>와 같이 썼던것과 같이 객체형으로 담아온다.
*/
/* 
    props 값 표현방식 
    props.name
    props.age
    typeof도 표현 가능
*/
/* 
//방법1
const Test4Sub = ( props ) => {
    return (
        <div style={{borderBottom:'2px solid tomato',margin:10,padding:10}}>
            <h2>Test4Sub 컴포넌트</h2>
            <h4> 이름 : {props.name} ({typeof props.name}) </h4>
            <h4> 나이 : {props.age} ({typeof props.age}) </h4>
        </div>
    );
}; */

/* 

//방법2
const Test4Sub = ( props ) => {
    // 기본형식(es6 정리본 보기.)
    // const dog = { name:'치와와', age:3 }

    //구조분해 , 비구조할당
    const {name, age} = props
    
    //편하게 props.name에서 props 생략가능
    return (
        <div style={{borderBottom:'2px solid tomato',margin:10,padding:10}}>
            <h2>Test4Sub 컴포넌트</h2>
            <h4> 이름 : {name} ({typeof name}) </h4>
            <h4> 나이 : {age} ({typeof age}) </h4>
        </div>
    );
};
 */


//방법3
const Test4Sub = ( {name, age} ) => {

    return (
        <div style={{borderBottom:'2px solid tomato', margin:10, padding:10}}>
            <h2>Test4Sub 컴포넌트</h2>
            <h4> 이름 : {name} ({typeof name}) </h4>
            <h4> 나이 : {age} ({typeof age}) </h4>
        </div>
    );
};


const Test4 = () => {
    //객체선언
    const data1 = {name:'강아지',age:3}
    const data2 = {name:'고양이',age:2}
    
    return (
        <div style={{border:'1px solid #999', padding:20, margin:20}}>
            <h2>Test4 컴포넌트</h2>
            {/* ​부모 컴포넌트에서 자식 컴포넌트에 값을 전달할때 자식 컴포넌트에서 부모의 값을 받아올때 ​ */}
            {/* 
                <자식컴포넌트 props명 = "값" props명 = {값} 
                props명 => 변수 = 값( 상태값, 함수 )
                props명 = {숫자, 논리값, 상태값, 함수 등}
            */}
            <hr />
            <Test4Sub name="홍길동" age={20} />
            <Test4Sub name="이익준" age="30" />
            {/* 
                선언한 객체도 전달 가능하다
                const data1 = {name:'강아지',age:3}로 
                만들었던 것을 전달가능.
                name={data1.name}
            */}
            <Test4Sub name={data1.name} age={data1.age}/>
            <Test4Sub name={data2.name} age={data2.age}/>
            {/* 
                {...복사}
                ...복사(키값)
            */}
            <Test4Sub {...data1}/>
            <Test4Sub {...data2}/>

        </div>
    );
};


export default Test4;