import React, { useState } from 'react';

const Test10 = () => {
    const [bgColor, setBgColor] = useState('pink')
    const onColor = () => {
        setBgColor( bgColor === 'pink' ? 'tomato' : 'pink')
    }
    return (
        <>
            <p>div를 클릭 시 색상 변경하기 pink - tomato</p>  
            <div style={{
                margin:20,
                padding:20,
                width:400,
                height: 100,
                lineHeight:'100px',
                background:bgColor,
                border:'1px solid #000',
                cursor: 'pointer',
                fontSize:25,
                testAlign : 'center'
            }}
            onClick={ onColor }
            >
                배경색 : {bgColor}
            </div>
        </>
    );
};

export default Test10;