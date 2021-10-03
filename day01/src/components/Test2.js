import React from 'react';

const Test2 = () => {
    return (
        <>
            <h2>JSX문법</h2>
            <p>한 줄 이상일 경우 반드시 div 또는 Fragment로 묶어준다.</p>
            <p>Fragment:불필요한 div태그를 없애기 위해 그룹핑해주는 역할이다. 또는 비어있는 태그 형식. (괄호만 써준다)</p>
            <p>태그열기 닫기 꼭 해준다</p>
            <p>빈태그 / 슬래시 꼭 넣어준다.</p>
            <img />
            <br/>
            <hr/>
            <input/>
        </>
    );
};

export default Test2;