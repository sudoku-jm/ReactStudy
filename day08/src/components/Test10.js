import React, { useCallback, useState } from 'react';
import Test10Sub from './Test10Sub';

const Test10 = () => {
    const [cnt1, setCnt1] = useState(0)
    const [cnt2, setCnt2] = useState(1)

    const increment1 = useCallback ( () => {
        setCnt1(cnt1+1)
    },[cnt1])
    
    const increment2 = useCallback( () => {
        setCnt2(cnt2+1)
    },[cnt2])

    return (
        <div>
            <h1>숫자 : {cnt1}</h1>
            <Test10Sub title="cnt1" cnt={cnt1} />
            <button onClick={increment1}>증가</button>
            <hr/>
            <h1>숫자 : {cnt2}</h1>
            <Test10Sub title="cnt2" cnt={cnt2} />
            <button onClick={increment2}>증가</button>
        </div>
    );
};

export default Test10;