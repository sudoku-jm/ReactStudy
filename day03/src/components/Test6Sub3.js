import React, { useRef, useState } from 'react';

const Test6Sub3 = () => {

    //첫 input에 포커스
    const idRef = useRef()

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

    const changeInput = (e) => {
        //비구조할당 방법
        const {value , name} = e.target
        // const {키, 키, 키} = 객체
        setForm ({
            ...form,    
            [name] : value  
            //[e.target.name]: e.target.value
            //객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.
        })

    }
   
    const onReset = () => {
        // const {value, name} = ''
        setForm({
            userid : '',
            userpw : '',
            useremail : ''
        })

        //ref와 current는 짝!
        //idRef로 포커스 이동.
        idRef.current.focus()
    }

    

    return (
        <div>
            <h4> input 여러개 관리 </h4>
            <p>
                {/* 
                    state값과 name값이 동일해야함.
                */}
                <input type="text" onChange={changeInput} value={userid} name="userid" ref={idRef}/><br/>
                <input type="text" onChange={changeInput} value={userpw} name="userpw" /><br/>
                <input type="text" onChange={changeInput} value={useremail} name="useremail" /><br/>
                <button onClick={onReset}>초기화</button>
            </p>

            <h3>아이디 : {userid}</h3>
            <h3>비밀번호 : {userpw}</h3>
            <h3>이메일 : {useremail}</h3>
        </div>
    );
};

export default Test6Sub3;



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