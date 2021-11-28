import React, { useMemo, useState } from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount( count + 1)
    }

    const testSub = useMemo( () => {
        return <Test5Sub/>
    },[count])

    return (
        <div>
            <h1> 출력 : {count}</h1>
            <button onClick={increment}>증가</button>
            <hr/>
            {testSub}
        </div>
    );
};

export default Test5;


/* 
useEffect : 업데이트(화면에 뿌려지고 난 후에 (시간,외부 데이터))

useMemo : return값 기억시킴.

useCallback : 함수 자체 기억
*/