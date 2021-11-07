import React, { useEffect, useState } from 'react';

const Test3Sub = () => {
    
    const [x ,setX] = useState(0)
    const [y, setY] = useState(0)

    //화면에 출력 후 useEffect는 실행하는 것.

    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    //1.  mount 했을 때 한번만
    useEffect( () => {
        console.log('mount!')
        window.addEventListener('mousemove',move)

        //숨기기 후 마우스 움직여도 move 이벤트는 살아 있어서 오류가 뜬다. 그래서  effect 이벤트 제거해줘야함.
        //메모리 누수되는 것을 방지하기 위해.
        //Clean-up
        return() => {
            console.log('Clean-up!!')
            window.removeEventListener('mousemove',move)
        }
    },[])
    
    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{border:'1px solid #000',width:300, padding:25, margin:10}}>
                <h1>X : {x}, Y : {y}</h1>
            </div>
        </div>
    );
};

export default Test3Sub;




/* 

 4. mount / update ( state , props **)
   useEffect( () => {
       실행문
            
       return() => {
          정리(Clean-up)    
       }
   },[의존값])


  Clean-up?
 : 실행 후 마무리 시, 기존 이벤트 제거하고 다시 발생
 : 메모리 누수를 방지하기 위해 UI컴포넌트를 제거하기 전에 수행
 컴포넌트가 여러번 렌더링 된다면 effect가 수행되기 이전에 effect를 정리해야함.

 사용범위
 1. 비동기통신 요청 응답 : 외부 API( axios, fetch )
 2. props로 받은 값을 처리할 때, state업데이트 될 때
 3. setInterval, setTimeout시간처리할 때
 4. 외부 라이브러리 사용할 때
*/