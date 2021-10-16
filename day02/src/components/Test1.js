import React from 'react';
//rsc
const Test1 = () => {
    const title = "연습입니다."
    const style1 = {
        backgroundColor : 'yellow',
        fontSize:24,
        padding:15
    }
    const color = 'pink'
    return (
        <div>
            <h1> JSX 영역 </h1>
            <h2 style={style1}>{title}</h2>
            <h2 style={{backgroundColor:color,padding:20}}>{title}</h2>
            {/* 주석 */}
            <h3
                //한줄
                /* 
                
                */
            >
                일요일 입니다.
            </h3>
        </div>
    );
};

export default Test1;