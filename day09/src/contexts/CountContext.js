import React, { createContext, useMemo, useState } from 'react';

export const CountContext = createContext()
const CountProvider = (props) => {
    const [count,setCount] = useState(0)
    
    const onIncrement = () => {
        setCount(count + 1)
    }
    const onDecrement = () => {
        setCount(count - 1)
    }

    const value = useMemo( () => ({count,onIncrement,onDecrement}),[count,onIncrement,onDecrement])

    return (
        <CountContext.Provider value={value}>
            {props.children}    
        </CountContext.Provider>
    );
};

export default CountProvider;