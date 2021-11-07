import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

//4. mount / update ( state , props **)

const Test3 = () => {
    const [ isActive,setIsActive] = useState(false)
    const onToggle = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            <button onClick={onToggle}>
                {
                    isActive ? '숨기기' : '보이기'
                }
            </button>
            <hr/>
            {
                isActive && <Test3Sub/> //true일때만 보이기
            }
        </div>
    );
};

export default Test3;



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