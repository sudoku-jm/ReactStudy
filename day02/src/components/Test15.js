import React from 'react';

const Test15 = () => {

    //event , evt , e
    const handleClick = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        /* 
            target : 대상요소, 
                     내부의 b태그 or span태그 클릭시 해당 요소.
            currentTarget : 이벤트 대상 
                            button 그 자체
        */
    }

    return (
        <div>
            <button onClick = {handleClick}>
                <span>확인확인</span>
                <br />
                <br />
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test15;