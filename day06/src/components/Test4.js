import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count , setCount ] = useState(1)

    //  시간관련 등 외부aJax 쓸땐 useEffect는 꼭 쓴다 
    useEffect ( () => {
         console.log('useEffect')
         const timer = setInterval( () => {
             console.log('setInterval')
            //  setCount( count + 1)
            // setInterval만 돌아가나 화면ui 안움직임. 
            // 결과값은 증가되지 않음. 1로 설정된 state값만 들고와서 +1만 해주므로 결과는 2.
            
            // setCount(이전값 => 이전값 + 1)
            setCount(count => count + 1)


            //뒷정리
            return () => {
                console.log('뒷정리')
                clearInterval(timer)
            }

         },1000)
         //시간이 중첩해서 돌아가서 엉망...
    },[])   
   

    return (
        <div>
            <h1>타이머 : {count}</h1>
        </div>
    );
};

export default Test4;