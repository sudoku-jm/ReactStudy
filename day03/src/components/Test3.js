import React, { useState } from 'react';

const Test3 = () => {
    const [color, setColor] = useState('')
    const [text, setText] = useState('')

    const onColor = (e) => {
        setText(e.target.value)
    }

    const onSelect = () => {
        //선택을 눌렀을때 변경
       setColor(text)
    }

    return (
        <div>
            <h2 style={{color:color}}>컬러 선택</h2>
            <select onChange = {onColor}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="hotpink">hotpink</option>
                <option value="skyblue">skyblue</option>
                <option value="tomato">tomato</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test3;