import React, { useState } from 'react';

const ChageCheckColor = () => {

    const [check,setCheck] = useState(false)

    const changeCheck = (e) => {
        const data = e.target.checked
        // console.log(data)
        setCheck(data)
    }

    return (
        /* 체크시 빨강색, 해제시 검정색 */
        <div style={{color : check? 'red' : 'black'}}>
            <input type="checkbox" id="changeChk" onChange={changeCheck}/>
            <label for="changeChk">오늘은 화요일입니다</label>
        </div>
    );
};

export default ChageCheckColor;