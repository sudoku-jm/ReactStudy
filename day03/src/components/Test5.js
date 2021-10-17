import React, { useState } from 'react';

const Test5 = () => {
    // const [check, setCheck] = useState(false)
    // const changeCheck = (e) => {
    //     setCheck(e.target.checked)
    // }
    
    // return (
    //     <div>
    //         <input type="checkbox" onChange={changeCheck} checked={check} />
    //         숨기기/보이기
    //         <div style={{width:200,height:100,backgroundColor:'pink',margin:15,display:check?'block':'none'}}></div>
    //     </div>
    // );

    const [check, setCheck] = useState(false)
    const changeCheck = (e) => {
        setCheck(e.target.checked)
    }
    
    return (
        <div>
            <input type="checkbox" onChange={changeCheck} checked={check} />
            {
                check ? '숨기기' : '보이기'
            }
            {
                check &&
                <div style={{width:200,height:100,backgroundColor:'pink',margin:15}}></div>
            }
        </div>
    );
};

export default Test5;