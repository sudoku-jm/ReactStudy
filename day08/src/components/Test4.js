import React, { useMemo, useState } from 'react';

const Test4 = () => {
    const [count,setCount] = useState(1)

    const fun = (cnt) => {
        console.log('test')
        let k = 0
        for(let i = 0 ; i < 1000000; i ++){
            k++
        }
        return cnt * 10
    }

    const reCount = useMemo( () => {
        return fun(count)
    },[count])

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <input type="text" value={count} onChange={e=>setCount(e.target.value)}/>
            <hr/>
            <h1>출력 : {reCount}</h1>
        </div>
    );
};

export default Test4;