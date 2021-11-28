import React, { useCallback, useState } from 'react';

const Test8 = () => {
    const [count ,setCount] = useState(1)
    const ran = Math.random();    
    //실행할 때마다 함수를 새로 만든다.

    const increment = useCallback( () => {
        console.log(ran)
        setCount(count + 1)
    },[count])//바뀌는 값이 있을 때만! 함수 실행
    
    const decrement = useCallback( () => {
        console.log(ran)
        setCount(count - 1)
    },[count])

    return (
        <div>
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Test8;


/* 

useCallback : 함수 자체 기억
*/