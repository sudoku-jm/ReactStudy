import React, { useState } from 'react';
import './reset.css';

const CountIncrementDecrement3 = () => {
    const [count, setCount] = useState(0)

    //  setCount (이전값 => 이전값 + 1)
    const increment = () => {
        setCount ( count => count + 1)
    }


    //  setCount (이전값 => 이전값 - 1)
    const decrement = () => {
        setCount( count => count - 1)
    }

    const boxStyle = {
        margin:20,
        padding:10,
        border:'1px solid #ccc'
    }

    return (
        <div>
            <h2>숫자 counter3 : {count}</h2>
            <div style={boxStyle}>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </div>
        </div>
    );
};

export default CountIncrementDecrement3;