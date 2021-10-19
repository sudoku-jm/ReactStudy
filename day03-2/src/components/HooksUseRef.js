import React, { useRef } from 'react';


const HooksUseRef = () => {
    const nameRef = useRef(null)
    const pwRef = useRef(null)

    const click = () => {
        /* click시 name과 pw 현재 값이 들어가게 만듦 */
        const data = {
            name : nameRef.current.value,
            pw : pwRef.current.value
        }
        console.log('data',data)

        const json = JSON.stringify(data, null ,5)
        console.log('json',json)
    }

    return (
        <>
            <input type="text" ref={nameRef} /><br/>
            <input type="text" ref={pwRef}/><br/>
            <button onClick={click}>확인</button>
            
        </>
    );
};

export default HooksUseRef;


/* 

JSON.stringify(value[, replacer[, space]])

*/


/*Hooks - useRef 
    *useRef ?
    직접 DOM 요소에 접근해야 할 때, 
    useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능 
    useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

    공식문서 내용
    useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
    useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

    Ref를 사용해야 할 때
    Ref의 바람직한 사용 사례는 다음과 같습니다.

    포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
    애니메이션을 직접적으로 실행시킬 때.
    서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
*/