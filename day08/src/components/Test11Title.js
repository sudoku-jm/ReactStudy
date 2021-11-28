import React, { memo } from 'react';

const Test11Title = memo(() => {
    console.log('title')
    return (
        <div>
            <h1>돈과 나이를 출력</h1>
        </div>
    );
});

export default Test11Title;
/* import React from 'react';

const Test11Title = () => {
    console.log('title')
    return (
        <div>
            <h1>돈과 나이를 출력</h1>
        </div>
    );
};

export default React.memo(Test11Title); */