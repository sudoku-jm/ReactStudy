import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1 = useRef()

    // 2. mount 한번만 -- 화면에 그려지고난 후 처음 한번만
    useEffect( () => {
        // ref1.current.focus()
    },[] )

    useLayoutEffect( () => {
        ref1.current.focus()
    },[] )

    return (
        <div>
            <input type="text" ref={ref1}/>
        </div>
    );
};

export default Test2;



/* 

 2. mount 한번만
   useEffect( () => {
       실행문
   },[])
 
   
*/