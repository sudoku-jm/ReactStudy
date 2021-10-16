import React, { useState } from 'react';
import './reset.css';

const CountIncrementDecrement4 = () => {
    const [count, setCount] = useState(0)

   
    /* 
    setCount( count + 1 )
    이런식으로 쓰면 2번 써도 1씩 증가

    setCount(이전값 => 이전값 + 1) 이렇게 쓰자! 
    */
    /* 2개씩 증감 */
    const increment = () => {
        // setCount( count + 1 )
        // setCount( count + 1 )
        setCount( count => count + 1)
        setCount( count => count + 1)
    }

    const decrement = () => {
        setCount( count => count - 1)
        setCount( count => count - 1)
    }

    /* 한 번 실행 될 때 5번씩 실행. */
    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(count => count + 1)
        }
    }
    const decrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(count => count - 1)
        }
        
    }


    const boxStyle = {
        margin:20,
        padding:10,
        border:'1px solid #ccc'
    }

    return (
        <div>
            <h2>숫자 counter5 씩 증감 : {count}</h2>
            <div style={boxStyle}>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </div>
            <div style={boxStyle}>
                <button onClick={incrementFive}>증가</button>
                <button onClick={decrementFive}>감소</button>
            </div>
        </div>
    );
};

export default CountIncrementDecrement4;