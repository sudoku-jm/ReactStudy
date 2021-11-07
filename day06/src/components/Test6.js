import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState( 0 )
    const [ isActive, setIsActive ] = useState(false)

    const onToggle = () => {
        setIsActive(!isActive)
    }
    const onReset = () => {
        setCount(0)
        setIsActive(false)
    }

   
    
    useEffect( () => {
        console.log('useEffect')
        let timer = null

        if(isActive){
            //isActive === true
            timer = setInterval( () => {
                setCount( count => count + 1)
            },1000)
        }else if(!isActive && count !== 0){
            //is Active === false
            clearInterval(timer)
        }

        return () => {
            console.log('뒷정리')
            clearInterval(timer)
        }

    },[isActive])
    //isActive가 갱신될 때


    return (
        <div>
            <h1>카운트 : { count }</h1>
            <button onClick={onToggle}>
                { isActive ? '중지' : '시작'}
            </button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test6;