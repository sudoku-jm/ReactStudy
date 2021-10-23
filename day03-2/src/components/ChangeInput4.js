import React, { useRef, useState } from 'react';

const ChangeInput4 = () => {

    //첫 input에 포커스이동.
    const idRef = useRef()

    const [form,setForm] = useState({
        userid : '',
        userpw : '',
        useremail: ''
    })

    const {userid,userpw,useremail} = form

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
            //[e.target.name]: e.target.value
            //객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.
            //[]의 의미는 key값으로 쓰겠다는 의미
        })
    }

    const onReset = () => {
        setForm({
            userid : '',
            userpw : '',
            useremail : ''
        })

        //ref와 current는 짝이다.
        //idRef로 포커스 이동.
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" name="userid" value={userid} onChange={changeInput} ref={idRef}/><br/>
            <input type="text" name="userpw" value={userpw} onChange={changeInput}/><br/>
            <input type="text" name="useremail" value={useremail} onChange={changeInput}/><br/>
            <button onClick = {onReset}>초기화</button>
            <hr/>
            <h3>아이디 : {userid}</h3>
            <h3>비밀번호 : {userpw}</h3>
            <h3>이메일 : {useremail}</h3>
        </div>
    );
};

export default ChangeInput4;


/*  (예)
    const name = 'variantKey';
    const object = {
    [name] : 'value'
    };

    //결과 값
    {
    'variantKey' : 'value'
    }
*/