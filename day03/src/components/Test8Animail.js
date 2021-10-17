import React from 'react';

const Test8Animail = ({ ani , onAni }) => {
    return (
        <div>
            <label>동물이름 : </label>
            <input type="text" value={ani} onChange={onAni}/>
            <span style={{marginLeft:15}}>{ani}</span>
        </div>
    );
};

export default Test8Animail;