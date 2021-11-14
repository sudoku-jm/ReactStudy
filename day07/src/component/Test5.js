import React from 'react';
import myStyle from './Test5.module.scss'

const Test5 = () => {
    return (
        <div className={myStyle.container}>
            <p className={myStyle.title}>scss module연습</p>
            <button className={myStyle.button}>확인</button>
        </div>
    );
};

export default Test5;