import React, { useCallback, useState } from 'react';
import Test11Count from './Test11Count';
import Test11Title from './Test11Title';

const Test11 = () => {
    const [age,setAge] = useState(20)
    const [money,setMoney] = useState(100000)

    const onAge = useCallback( () => {
        setAge( age + 1)
    },[age])

    const onMoney = useCallback( () => {
        setMoney( money + 1)
    },[money])

    return (
        <div>
            <Test11Title/>
            <Test11Count text="나이" count={age}/>
            <button onClick={onAge}>나이증가</button>
            <hr/>
            <Test11Count text="급여" count={money}/>
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test11;