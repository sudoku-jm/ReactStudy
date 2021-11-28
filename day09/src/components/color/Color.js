import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
/* 보여지는 UI가 들어감 (껍데기) */

const Color = () => {
    //{}에는 ColorContext.Provider의 value넣어줌
    //useContext에는 관리자명 넣어줌
    const {color,onRed,onTomato,onHotPink,onLime,onSkyBlue} = useContext(ColorContext) 
    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => onRed()}>red</button>
                <button onClick={() => onTomato()}>tomato</button>
                <button onClick={() => onHotPink()}>hotpink</button>
                <button onClick={() => onLime()}>lime</button>
                <button onClick={() => onSkyBlue()}>skyblue</button>
            </p>
        </div>
    );
};

export default Color;