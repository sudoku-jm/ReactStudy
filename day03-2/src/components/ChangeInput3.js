import React, { useState } from 'react';

const ChangeInput3 = () => {
    const [form,setForm] = useState({
        userid : '',
        userpw : '',
        useremail : ''
    })

    //비구조할당으로 만들기
    //form.userid, form.userpw, form.useremail로 쓰는 것을 간단히
    const {userid,userpw,useremail} = form

    const changeInput1 = (e) => {
        const {value, name} = e.target
        setForm({
            ...form, //스프레드 연산자 , 기존 값 그대로 가져와 
            [name] : value // 변경 할 부분만 수정해준다
            //[]의 의미는 key값으로 쓰겠다는 의미
        })
    }

    const changeInput2 = (e) => {
        const {value,name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const changeInput3 = (e) => {
        const {value,name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onReset = () => {
        
    }
    

    return (
        <div>
            <h4>input 여러개관리3</h4>
            <input type="text" onChange={changeInput1} value={userid} name="userid" /><br/>
            <input type="text" onChange={changeInput2} value={userpw} name="userpw" /><br/>
            <input type="text" onChange={changeInput3} value={useremail} name="useremail" /><br/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h3>아이디: {userid}</h3>
            <h3>비밀번호: {userpw}</h3>
            <h3>이메일: {useremail}</h3>
        </div>
    );
};

export default ChangeInput3;