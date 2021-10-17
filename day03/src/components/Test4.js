import React, { useState } from 'react';

const Test4 = () => {

    const [check, setCheck] = useState(false)


    const changeCheck = (e) => {
        setCheck(e.target.checked)
        /* 
            hooks - state 값이 true , false가 된다
        */
    }

    return (
        <div style={{color : check ? 'red' : 'black',margin:30}}>
            <input type="checkbox" onChange={changeCheck} checked = {check}/>
            오늘은 일요일 입니다.
            {/* 체크를 누르면 글자색 빨간색, 해제시 검정 */}
        </div>
    );
};

export default Test4;