import React , {useState} from 'react';

const Hook3 = () => {
    const [bgColor, setBgColor] = useState('pink')
    const onColor = () => {
        setBgColor(bgColor === 'pink'? 'tomato' : 'pink')
    }
    
    return (
        <>
            <h3>div를 클릭 시 색상 변경 pink - tomato </h3>
            <div style={{
                width:100,
                padding:10,
                backgroundColor : bgColor
            }}
            onClick={onColor}>
                배경색 : {bgColor}
            </div>
        </>
    );
};

export default Hook3;