import React, { useState } from 'react';
import './reset.css';

const CountIncrementDecrement = () => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount ( count + 1 )
    }

    const decrement = () =>{
        setCount (count - 1)
    }
    
    const boxStyle = {
        margin:20,
        padding:10,
        border:'1px solid #ccc'
    }

    return (
        <div>
            <h2>숫자 : {count}</h2>
            <div style={boxStyle}>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </div>
        </div>
    );
};

export default CountIncrementDecrement;