import React, { useState } from 'react';

const UsestateSelectColor = () => {

    const [color, setColor] = useState('')
    const [text, setText] = useState('')
    
    
    const onColorChange = (e) => {
        setText(e.target.value)
    }
    
    console.log('text',text)
    
    const onSelect = () => {
        setColor(text)
    }
    console.log('color',color)

    return (
        <div>
            <h2 style={{color:color}}>컬러선택</h2>
            <select onChange={onColorChange}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default UsestateSelectColor;