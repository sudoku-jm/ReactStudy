import React, { useState } from 'react';

const Test6Sub1 = () => {
    // 객체화
    // 해당부분 초기화
    const [form, setForm] = useState({
        userid : '',
        userpw : '',
        useremail : ''
    })

    const changeInput1 = (e) => {
        //비구조할당 방법
        const {value} = e.target
        setForm ({
            ...form,    //스프레드연산자
                        //기존 값 그대로 가져와서
            userid : value  // 변경할 부분만 수정
        })

    }
    const changeInput2 = (e) => {
         //비구조할당 방법
         const {value} = e.target
        setForm ({
            ...form,
            userpw : value
        })
    }
    const changeInput3 = (e) => {
        //비구조할당 방법
        const {value} = e.target
        setForm({
            ...form,
            useremail : value
        })
    
    }

    const onReset = () => {
       

    }

    

    return (
        <div>
            <h4> input 여러개 관리 </h4>
            <p>
                <input type="text" onChange={changeInput1} value={form.userid} /><br/>
                <input type="text" onChange={changeInput2} value={form.userpw} /><br/>
                <input type="text" onChange={changeInput3} value={form.useremail}/><br/>
                <button onClick={onReset}>초기화</button>
            </p>

            <h3>아이디 : {form.userid}</h3>
            <h3>비밀번호 : {form.userpw}</h3>
            <h3>이메일 : {form.useremail}</h3>
        </div>
    );
};

export default Test6Sub1;