import React, { useState } from 'react';

const Test11 = () => {
    const [visible, setVisible] = useState(false)

    const onShow = () => {
        setVisible(true)
    }
    const onHide = () => {
        setVisible(false)
    }
    const onToggle = () => {
        setVisible(!visible)
    }

    return (
        <>
            <p>버튼 누르면 박스 보이기 숨기기</p>
            <p>
                <button onClick={onShow}>보이기</button>
                <button onClick={onHide}>숨기기</button>
                <button onClick={onToggle}>
                    {
                       visible ? '숨기기' : '보이기'
                    }
                </button>
            </p>

            {

                visible === true ?
                <div style={{
                    width: 300,
                    height: 100,
                    backgroundColor:'pink',
                    margin:20
                }}></div>
                : null
            }
            <hr/>

            {
                visible && 
                <div style={{
                    width: 300,
                    height: 100,
                    backgroundColor:'pink',
                    margin:20
                }}></div>
            }


            
        </>
    );
};

export default Test11;