import React from 'react';

const Test3 = () => {
    //함수영역 - 변수선언 리액트 형식은 다르다.
    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '서울'
    const tel = '010-0000-0000'    

    return (
        <>
            <h1>JSX 영역 - 화면에 보이는 부분</h1>
            <h2>{title}</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
            </ul>

            //한줄주석
            /* 여러줄 주석*/
            {/* 설명입니다. */}

            <p
                //한줄주석
                /* 
                    여러줄 주석
                */
            >
                오늘은 일요일 입니다.
            </p>
        </>
    );
};

export default Test3;