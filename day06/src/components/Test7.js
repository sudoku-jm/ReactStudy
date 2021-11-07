import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [isShow, setIsShow] = useState(false)
    const onToggle = () => {
        setIsShow( !isShow )
    }
    return (
        <div>
            <p>
                <button onClick={onToggle}>
                    {
                        isShow? '숨기기' : '보이기'
                    }
                </button>
            </p>
            <hr/>
            {
                isShow && <Test7Sub/>
            }
        </div>
    );
};

export default Test7;