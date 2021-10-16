import React, { useState } from 'react';
/* 

    useState ?
    현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공
    
    *state값은 값을 유동적으로 바뀔 때 사용 할 것.

*/
const Hook = () => {
    
    //새로운 state 변수를 선언하고, count라 부른다.
    const [count, setCount] = useState(0);
    return (
        <>
            <p> you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
        </>
    );
};

export default Hook;