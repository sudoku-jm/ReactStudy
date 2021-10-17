import React, { useState } from 'react';

const Test10 = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const changeInput1 = (e) => {
        setUserid(e.target.value)
    }

    const changeInput2 = (e) => {
        setUserpw(e.target.value)
    }


    return (
        <div>
            <input type="text" value={userid} onChange={changeInput1}/>
            <input type="password" value={userpw} onChange={changeInput2}/>
            <button disabled={userpw.length < 7}>제출</button>
            {/* {
                userpw.length > 6 ?
                <button>제출</button> : 
                <button disabled>제출</button> 
            } */}
            
        </div>
    );
};

export default Test10;