import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count,setCount] = useState(1)
    const [step, setStep] = useState(1)

    useEffect ( () => {
        console.log('useEffect')
        const timer = setInterval( () => {
            setCount( count => count + step )
        },1000)
        return () => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[step])
    // 업데이트 시켜주면서 값이 변경 될 때마다 한번만 실행! 기존 effect삭제해준다.뒷정리 (return)
    
    const changeInput = e => {
        const {value} = e.target
        //문자열을 숫자로 변경시켜준다.
        setStep(Number(value))
    }


    return (
        <div>
            <input type="text" value={step} onChange={changeInput}/>
            <h1>타이머 : {count}</h1>
        </div>
    );
};

export default Test5;


/* 


 4. mount / update ( state , props **)
   useEffect( () => {
       실행문
            
       return() => {
          정리(Clean-up)    
       }
   },[의존값])

*/