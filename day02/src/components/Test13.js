import React, { useState } from 'react';

const Test13 = () => {

    //초기값 0 셋팅
    const [count , setCount] = useState(0)

    const increment = () => {
        setCount( count + 1 )
    }

    const decrement = () => {
        setCount( count - 1 )
    }

    const increment1 = () => {
        /* 
            2번 써도 1씩 증가한다.
            {} 안에 있는 함수 동시실행.
            아무리 많이 써도 1씩만 증가함.
        */

        // setCount(이전값 => 이전값 + 1)
        // setCount( state => state + 1)
        setCount( state => state + 1)   // 이름은 중요x
        setCount( count => count + 1)
    }
    const decrement1 = () => {
        setCount( count => count - 1)
        setCount( count => count - 1)
    }

    const increment2 = () => {
        for( let i = 0; i < 5; i++){
            setCount( count => count + 1)   //한 번 실행 될 때 5번 실행
            // setCount(이전값 => 이전값 + 1) 이 for문으로 5번 실행.
        }
    }
    const decrement2 = () => {
        for( let i = 0; i < 5; i++){
            setCount( state => state - 1)
        }
    }

    return (
        <div>
            <h2> 숫자 : {count}</h2>
            {/* 방법1 */}
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>

            {/* 방법2 */}
            <p>
                <button onClick={ () => setCount(count+1) }>증가</button>
                <button onClick={ () => setCount(count-1 )}>감소</button>
            </p>

            {/* 방법3 */}
            <p>
                <button onClick={increment1}>증가</button>
                <button onClick={decrement1}>감소</button>
            </p>

            {/* 방법2 */}
            <p>
                <button onClick={increment2}>증가</button>
                <button onClick={decrement2}>감소</button>
            </p>
        </div>
    );
};

export default Test13;