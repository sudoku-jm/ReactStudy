import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [color,setColor] = useState('')
    const [drama,setDrama] = useState('')

    const onColor = (e) => {
        setColor(e.target.value)
    }
    const onDrama = (e) => {
        setDrama(e.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input type="text" value={color} onChange={onColor}/>
                <p> tomato, pink, orange, yellow </p>
            </div>
            <h2>당신이 좋아하는 드라마는?</h2>
            <p>
                <input type="radio" value="지금 헤어지는 중입니다." onChange={onDrama} name="drama"/>
                <label>지금 헤어지는 중입니다.</label>
            </p>
            <p>
                <input type="radio" value="슬기로운 의사생활" onChange={onDrama} name="drama"/>
                <label>슬기로운 의사생활</label>
            </p>
            <p>
                <input type="radio" value="지리산" onChange={onDrama} name="drama"/>
                <label>지리산</label>
            </p>
            <p>
                <input type="radio" value="오징어게임" onChange={onDrama} name="drama"/>
                <label>오징어게임</label>
            </p>

            <hr/>

            <Test7Sub color={color} drama={drama}/>
        </div>
    );
};

export default Test7;