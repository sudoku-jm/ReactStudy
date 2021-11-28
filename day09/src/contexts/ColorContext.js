import React, { createContext, useState } from 'react';
/* 행동이 들어가는 공간. (알맹이) */

//전역 데이터 관리자
//관리자와 컴포넌트명 같으면 안된다.
export const ColorContext = createContext() //관리자명

const ColorProvider = (props) => {
    //상태, 함수
    const [color,setColor] = useState('green')

    const onRed = () => {setColor('red')}
    const onTomato = () => {setColor('tomato')}
    const onHotPink = () => {setColor('hotpink')}
    const onLime = () => {setColor('lime')}
    const onSkyBlue = () => {setColor('skyblue')}

    return (
        //value값으로 해당 ui로 보내준다."전달값"
        <ColorContext.Provider value={{color,onRed,onTomato,onHotPink,onLime,onSkyBlue}}>
            {props.children}    {/* app.js에서 온 것 <Color/> */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;   //나가는 것. App.js로 보낸다.