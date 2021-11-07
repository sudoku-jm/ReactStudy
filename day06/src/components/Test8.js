import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    /*  메시지 출력 후 3초 뒤 사라지게 하기 */

    const [isShow, setIsShow] = useState(false)
    const [msg , setMsg] = useState(' 메세지 화면에 보임')

    const onMsg1 = () => {
        const result = window.confirm('데이터를 모두 삭제하시겠습니까?')
        if(result) {
            setMsg('예 모두 삭제해 주세요')
            setIsShow(true)
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('데이터를 모두  복구하시겠습니까?')
        if(result) {
            setMsg('예 모두 복구해 주세요')
            setIsShow(true)
        }
    }

  
    return (
        <div>
            <p>
                <button onClick={onMsg1}>메시지 출력1</button>
                <button onClick={onMsg2}>메시지 출력2</button>
            </p>
            <hr/>
            {
                isShow && <Test8Sub msg={msg} isShow={isShow} setIsShow={setIsShow}/>
            }
           
        </div>
    );
};

export default Test8;