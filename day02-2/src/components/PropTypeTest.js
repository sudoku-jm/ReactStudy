import React from 'react';
import PropTypeTestSub from './PropTypeTestSub';

const Test5 = () => {
    return (
        <div>
            
            <PropTypeTestSub
            name='홍길동'
            age={30}
            addr='부산'
            color='green'
            done={false}
            />

            
            <PropTypeTestSub
            age={10}
            color='pink'
            done={true}
            />
        </div>
    );
};

export default Test5;