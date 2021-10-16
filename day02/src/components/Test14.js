import React, { useState } from 'react';
import './Test14.css'

const Test14 = () => {

    const [isClass, setIsClass] = useState(false)

    const onAdd = () => {
        setIsClass(true)
    } 
    const onRemove = () => {
        setIsClass(false)
    } 
    const onToggle= () => {
        setIsClass(!isClass)
    } 

    return (
        <div className="wrap">
            <p className="test">오늘은 일요일 입니다.</p>
            <p className="test on">오늘은 일요일 입니다.</p>
            <p className="on1">오늘은 일요일 입니다.</p>
            <hr />
            <p className={`test ${isClass ? 'on' : ''}`}>오늘은 일요일 입니다.</p>
            <p className={isClass ? 'on' : ''}>오늘은 일요일 입니다.</p>
            <p className={isClass === true ? 'on1' : ''}>오늘은 일요일 입니다.</p>

            <div>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </div>
        </div>
    );
};

export default Test14;