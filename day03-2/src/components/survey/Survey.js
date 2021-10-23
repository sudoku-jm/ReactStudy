import React, { useState } from 'react';
import './style.css';
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {

    //이전, 다음
    const [step , setStep] = useState(1)
    const onPrev = () => {
        setStep(step => step - 1)
    }
    const onNext = () => {
        setStep(step => step + 1)
    }

    //객체화, 해당부분 초기화
    const [form, setForm] = useState({
        username : '',
        age : '',
        addr : '',
        tel : '',
        job : '',
        email : '',
        sex : '',
        inter : ''
    })

    const {username,age,addr,tel,job,email,sex,inter} = form

    const changeInput = (e) => {
        const {value,name} = e.target
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
                <SurveyStep1 form={form} changeInput={changeInput} onNext={onNext} />
            }
            {
                /* 방법1 */
                step === 2&&
                <SurveyStep2 form={form} changeInput={changeInput} onPrev={onPrev} onNext={onNext} />
            }
            {
                /* 방법2 */
                step === 3&&
                <SurveyStep3 {...form} onPrev={onPrev} onNext={onNext}/>
            }
            {
                step === 4&&
                <SurveyStep4 username={username}/>
            }
        </div>
    );
};

export default Survey;