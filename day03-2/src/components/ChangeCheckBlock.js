import React, { useState } from 'react';

const ChangeCheckBlock = () => {

    const [check,setCheck] = useState(false)

    const onCheck = (e) => {
        setCheck(e.target.checked)
    }

    const boxstyle = {
        width : 200,
        height:200,
        backgroundColor:'pink',
        margin:15
    }
    return (
        <div>
            <input type="checkbox" onChange={onCheck}/>
            {
                check ? '보이기' : '숨기기'
            }
            {
                check &&
                <div style={boxstyle}></div>
            }
        </div>
    );
};

export default ChangeCheckBlock;