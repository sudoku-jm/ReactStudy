import React from 'react';

const Test11Count = ({count , text}) => {
    console.log('count',text)
    return (
        <div>
            <h2>{text} : {count}</h2>
        </div>
    );
};

export default React.memo(Test11Count);