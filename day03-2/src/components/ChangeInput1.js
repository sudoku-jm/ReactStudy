import React, { useState } from 'react';

const ChangeInput1 = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')
    const [useremail, setUseremail] = useState('')

    const changeIuput1 = (e) => {
        const {value} = e.target
        setUserid(value)
    }

    const changeInput2 = (e) => {
        const {value} = e.target
        setUserpw(value)
    }

    const changeInput3 = (e) => {
        const {value} = e.target
        setUseremail(value)
    }

    const onReset = () => {
        setUserid('')
        setUserpw('')
        setUseremail('')
    }

    return (
        <div>
            <h4>input 여러개 관리</h4>
            <input type="text" value={userid} onChange={changeIuput1} /><br/>
            <input type="text" value={userpw} onChange={changeInput2} /><br/>
            <input type="text" value={useremail} onChange={changeInput3} /><br/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h3>아이디 : {userid} </h3>
            <h3>비밀번호 : {userpw} </h3>
            <h3>이메일 : {useremail}</h3>
        </div>
    );
};

export default ChangeInput1;