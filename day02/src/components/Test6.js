import React from 'react';
import TestSub6 from './TestSub6';

const Test6 = () => {
    return (
        <>
            <TestSub6 
                name = "이익준"
                age = {30}
                addr = "서울"
                tel = "010-0000-1111"
                color = "tomato"
                done = {true}
            />
            <hr />
            <TestSub6 
                name ="이익순"
                addr = "제주"
                color = "skyblue"
            />
            <hr />
            <TestSub6 />
        </>
    );
};

export default Test6;