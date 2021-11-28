//방법2 : rscm
import React, { memo } from 'react';

const Test10Sub = memo(( {title,cnt} )  => {
    console.log(title,cnt)
    return (
        <div>
            <h2>{title}:{cnt}</h2>
        </div>
    );
});

export default Test10Sub;

/* 
방법1
import React from 'react';

const Test10Sub = ( {title,cnt} ) => {
    console.log(title,cnt)
    return (
        <div>
            <h2>{title}:{cnt}</h2>
        </div>
    );
};

export default React.memo(Test10Sub); */


/* 
React.memo?
컴포넌트가 많으면 연결되어 있는 자식 컴포넌트가 다 실행되는 문제.
값이 바뀌는 부분의 컴포넌트만 호출해서 바꿔주게끔 처리함.


*/