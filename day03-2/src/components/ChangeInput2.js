import React, { useState } from 'react';

const ChangeInput2 = () => {

    //객체화, 해당부분 초기화
    const [form,setForm] = useState({
        userid : '',
        userpw : '',
        useremail : ''
    })

    const changeInput1 = (e) => {
        //비구조할당
        const {value} = e.target
        setForm({
            //스프레드연산자, 기존 값 그대로 가져와서 변경할 부분만 수정
            ...form,
            userid : value
        })
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userpw : value
        })
    }
    const changeInput3 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            useremail : value
        })
    }

    return (
        <div>
            <h4>input 여러개 관리2</h4>
            <input type="text" onChange={changeInput1} value={form.userid} /><br/>
            <input type="text" onChange={changeInput2}  value={form.userpw}/><br/>
            <input type="text" onChange={changeInput3} value={form.useremail}/><br/>
            <button>초기화</button>
            <hr/>
            <h3>아이디 : {form.userid}</h3>
            <h3>비밀번호 : {form.userpw}</h3>
            <h3>이메일 : {form.useremail}</h3>
        </div>
    );
};

export default ChangeInput2;