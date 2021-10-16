import React, { useState } from 'react';

const Test16 = () => {
    
    // input에 글을 쓸 경우 담을 그릇이 필요!
    const [userid , setUserid] = useState('')
    const [userpw , setUserpw] = useState('')

    const handleChange1 = (e) => {
        //해당하는 태그의 내용/속성 뽑기.
        setUserid( e.target.value )
    }
    const handleChange2 = (e) => {
        setUserpw( e.target.value )
    }
    const onReset = () => {
        setUserid('')
        setUserpw('')
    }

    return (
        <div>
            <input type="text" onChange={handleChange1} value={userid} />
            <input type="text" onChange={handleChange2} value={userpw}/>
            <button onClick={onReset}>초기화</button>
            <h3>{userid} / {userpw}</h3>
        </div>
    );
};

export default Test16;