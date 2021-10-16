import React, { useState } from 'react';
import './reset.css';

const CountIncrementDecrement2 = () => {
    const [count, setCount] = useState(0)

    const boxStyle = {
        margin:20,
        padding:10,
        border:'1px solid #ccc'
    }

    return (
        <div>
            <h2>숫자 2 : {count}</h2>
            <div style={boxStyle}>
                <button onClick={() => {setCount(count + 1)}}>증가</button>
                <button onClick={() => {setCount(count - 1)}}>감소</button>
            </div>
        </div>
    );
};

export default CountIncrementDecrement2;