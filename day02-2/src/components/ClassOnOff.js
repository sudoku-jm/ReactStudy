import React, { useState } from 'react';
import './sub.css'

const ClassOnOff = () => {

    const [onClass, setOnClass] = useState(false)

    const onAdd = () =>{
        setOnClass(true)
    }

    const onRemove = () =>{
        setOnClass(false)
    }

    const onToggle = () =>{
        setOnClass(!onClass)
    }

    return (
        <div className="wrap">
            {/* <p className="test">오늘은 토요일입니다.</p>
            <p className="test on">오늘은 토요일입니다.</p>
            <p className="on1">오늘은 토요일입니다.</p> */}

            <div>
                <p className={onClass? 'on':''}>오늘은 토요일입니다.</p>
                <p className={`test ${onClass? 'on' : ''}`}>오늘은 토요일입니다.</p>
                <p className={onClass === true ? 'on1':''}>오늘은 토요일입니다.</p>
            </div>
            <hr/>
            <h2>class 토글만들기</h2>
            <div>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </div>
        </div>
    );
};

export default ClassOnOff;