import React, { useState } from 'react';
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';


const Survey = () => {

    //이전 다음
    const [step, setStep] = useState(1)
    const onNext = () => {
        setStep(step => step + 1)
    }
    const onPrev = () => {
        setStep(step => step - 1)
    }

    //객체화, 해당부분 초기화.
    const [form ,setForm] = useState({
        username : '',
        age : '',
        addr : '',
        tel : '',
        job : '',
        email : '',
        sex : '',
        inter : ''
    })

    //비구조할당
    const {username,age,addr,tel,job,email,sex,inter} = form

    const changeInput = (e) => {
        //name값으로 key값 만들어주기
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
            //키 : 값
            //username : value
        })
    }

    return (
        <div className="wrap">
            {
                step === 1&&
                <SurveyStep1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />
            }
            {
                step === 2 &&
                <SurveyStep2 job = {job} email = {email} sex = {sex} inter={inter} changeInput={changeInput} onNext={onNext} onPrev={onPrev}/>
            }
            {
                step === 3 &&
                 <SurveyStep3 username={username} age={age} addr={addr} tel={tel} job = {job} email = {email} sex = {sex} inter={inter} onNext={onNext} onPrev={onPrev} />
            }
            {
                step === 4 &&
                <SurveyStep4 username={username}/>
            }
        </div>
    );
};

export default Survey;