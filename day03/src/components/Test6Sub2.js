import React, { useState } from 'react';

const Test6Sub2 = () => {
    // 객체화
    // 해당부분 초기화
    const [form, setForm] = useState({
        userid : '',
        userpw : '',
        useremail : ''
    })

    //비구조할당으로 만들기
    //form.userid, form.userpw , form.useremail로 쓰는 것을 간단히 쓰게끔.
    const {userid,userpw,useremail} = form

    const changeInput1 = (e) => {
        //비구조할당 방법
        const {value , name} = e.target
        setForm ({
            ...form,    //스프레드연산자
                        //기존 값 그대로 가져와서
            [name] : value  // 변경할 부분만 수정
        })

    }
    const changeInput2 = (e) => {
         //비구조할당 방법
         const {value, name} = e.target
        setForm ({
            ...form,
            [name] : value
        })
    }
    const changeInput3 = (e) => {
        //비구조할당 방법
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    
    }

    const onReset = () => {
    }

    

    return (
        <div>
            <h4> input 여러개 관리 </h4>
            <p>
                {/* 
                    state값과 name값이 동일해야함.
                */}
                <input type="text" onChange={changeInput1} value={userid} name="userid" /><br/>
                <input type="text" onChange={changeInput2} value={userpw} name="userpw" /><br/>
                <input type="text" onChange={changeInput3} value={useremail} name="useremail" /><br/>
                <button onClick={onReset}>초기화</button>
            </p>

            <h3>아이디 : {userid}</h3>
            <h3>비밀번호 : {userpw}</h3>
            <h3>이메일 : {useremail}</h3>
        </div>
    );
};

export default Test6Sub2;