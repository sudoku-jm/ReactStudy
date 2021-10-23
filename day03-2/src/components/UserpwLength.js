import React, { useState } from 'react';

const UserpwLength = () => {
    const [userid,setUserid] = useState('')
    const [userpw,setUserpw] = useState('')

    const changeId = (e) => {
        setUserid(e.target.value)
    }

    const changePw = (e) => {
        setUserpw(e.target.value)
    }

    return (
        <div>
            {/* 비밀번호가 6자리 이상이면 제출버튼 on */}
            <input type="text" value={userid} onChange={changeId} /><br/>
            <input type="password" value={userpw} onChange={changePw}/><br/>
            <button disabled={userpw.length<7}>제출</button>
            {/* 7미만 true, 이상 false */}

            {/* {
                userpw.length > 6 ?
                <button>제출</button> : 
                <button disabled>제출</button> 
            } */}
        </div>
    );
};

export default UserpwLength;