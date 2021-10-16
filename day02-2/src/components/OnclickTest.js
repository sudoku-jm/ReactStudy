import React from 'react';
import './reset.css';

const OnclickTest = () => {
    // click event
    const buttonHandle1 = () => {alert('click1')}
    const buttonHandle2 = () => {alert('click2')}
    const buttonHandle3 = () => {alert('click3')}

    const buttonHandle4 = (num) => {
        alert(num)
    }

    const buttonHandle5 = (num1, num2) => {
        alert(num1 + num2);
    }

    const style1 = {
        fontSize : 14,
        padding:10,
        backgroundColor:'#f9f9f9',
        borderTop:'1px solid #eee',
        borderBottom:'1px solid #eee',
    }

    const style2 = {
        padding:10,
        fontSize:14,
        backgroundColor:'white'
    }

    return (
        <>
            <h2>Onclick Event</h2>
            <div style={style1}>
                <h3 style={{marginBottom:'10px'}}>일반적인 onClick 이벤트</h3>
                <button onClick={ buttonHandle1 }>BUTTON CLICK!!</button>
                <button onClick={ buttonHandle2 }>BUTTON CLICK!!</button>
                <button onClick={ buttonHandle3 }>BUTTON CLICK!!</button>
            </div>

            <div style={style2}>
                <h3 style={{marginBottom:'10px'}}>즉시 함수 사용</h3>
                <button onClick={ () => { alert('click4') } }>BUTTON</button>
            </div>

            <div style={style1}>
                <h3 style={{marginBottom:10}}>함수, 매개변수 실행</h3>
                <button onClick={() => { buttonHandle4(100) }}>BUTTON</button>
                <button onClick={() => { buttonHandle5(100,200) }}>BUTTON</button>
            </div>
        </>
    );
};

export default OnclickTest;