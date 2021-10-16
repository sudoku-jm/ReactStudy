import React, { useState , useEffect } from 'react';

const EffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title =  `${count}번 클릭했어요^^`
    })

    return (
        <div>
            <p>{count}번 클릭 했어요!</p>
            <button onClick={() => { setCount(count+1)}}>button</button>
        </div>
    );
};

export default EffectHook;