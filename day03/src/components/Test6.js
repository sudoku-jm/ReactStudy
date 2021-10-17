import React, { useState } from 'react';

const Test6 = () => {
    const [userid , setUserid] = useState('')
    const [userpw , setUserpw] = useState('')
    const [useremail , setUseremail] = useState('')

    const changeInput1 = (e) => {
        //비구조할당 방법
        const {value} = e.target
        setUserid(value)
    }
    const changeInput2 = (e) => {
         //비구조할당 방법
         const {value} = e.target
         setUserpw(value)
    }
    const changeInput3 = (e) => {
        //비구조할당 방법
        const {value} = e.target
        setUseremail(value)
    }

    const onReset = () => {
        // const {value} = ''
        setUserid('')
        setUserpw('')
        setUseremail('')

    }

    

    return (
        <div>
            <h4> input 여러개 관리 </h4>
            <p>
                <input type="text" onChange={changeInput1} value={userid} /><br/>
                <input type="text" onChange={changeInput2} value={userpw} /><br/>
                <input type="text" onChange={changeInput3} value={useremail}/><br/>
                <button onClick={onReset}>초기화</button>
            </p>

            <h3>아이디 : {userid}</h3>
            <h3>비밀번호 : {userpw}</h3>
            <h3>이메일 : {useremail}</h3>
        </div>
    );
};

export default Test6;