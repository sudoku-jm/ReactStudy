import React, { useEffect, useState } from 'react';

const Test7Sub = () => {
    const [date, setDate] = useState(new Date())

    useEffect( () => {
        console.log('useEffect')
        const timer = setInterval( () => {
            setDate( new Date() ) //1초 마다 
        },1000)
        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[]) 
    return (
        <div>
            <h2>날짜 : { date.toLocaleDateString() }</h2>
            <h2>시간 : { date.toLocaleTimeString() }</h2>
        </div>
    );
};

export default Test7Sub;