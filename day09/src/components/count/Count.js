import React, { useContext } from 'react';
import { CountContext } from '../../contexts/CountContext';

const Count = () => {
    const {count,onIncrement,onDecrement} = useContext(CountContext)
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={() => onIncrement()}>증가</button>
                <button onClick={() => onDecrement()}>감소</button>
            </p>
        </div>
    );
};

export default Count;