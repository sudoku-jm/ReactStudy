import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
  const [ count, setCount ] = useState(1)
  const ref1 = useRef()
  const ref2 = useRef()
  const onColor = () => {
    setCount( count + 1)
    ref1.current.style.color = 'pink'
    ref2.current.style.color = 'green'
   }  

  // 1. mount / update (많이 사용하지 않는다) -- 화면에 그려지고 난 후
   useEffect ( () => {
    console.log('useEffect')
    ref1.current.style.color = 'blue'
   })
  // 화면에 그려지고 난 후에 실행되다보니 깜빡임이 있음.

 // 1. mount / update (많이 사용하지 않는다) -- 화면에 그려지기 전. 주로 useEffect의 문제가 발생했을 때 사용한다.
  useLayoutEffect( () => {
    console.log('useLayoutEffect')
    ref2.current.style.color = 'skyblue'
  })

    return (
        <div>
          <h1>카운트 : {count}</h1>
          <h1 ref={ref1}> useEffect </h1>
          <h1 ref={ref2}> useLayoutEffect </h1>
          <button onClick={onColor}>컬러와 숫자변경 </button>
        </div>
    );
};
export default Test1;


/*

# Hooks - useEffect 설명 
useEffect 

Effect Hook을 사용하면 함수 컴포넌트에서 부수효과(side effect)를 수행
부수효과 : 함수가 결과값을 반환하는것 외에 다른일 할때 그 함수는 부수효과를 가진다 
부수효과(side effect) : 비동기통신 요청/응답 , DOM조작, 구독/취소 등 

class 형
라이프라이클 : componentDidMount ( 처음 실행후 )
               componentDidUpdate ( 값이 변경된 후)
               componentWillUnmount ( 닫기, 로딩이 끝난후 )

함수형 useEffect는 클래스의 라이프사이클 3가지를 합쳐놓은것이다. 

형식 : useEffect( func )
React 요소가 실제 DOM에 렌더링 된후 콜백 ( 실행 )
 - useEffect  화면에 레더링이 완료된후 실행 
 - 컴포넌트가 렌더링 될때마다 업데이터 작업을 수행 
 - useEffect(콜백함수 , [의존성]) 

 - 마운트 되었을때 ( 처음실행 )
 - 언마운트 되었을때 ( 사라질때 )
 - 업데이트 되었을때 ( 특정 state , 특정 props*** ) 가 바뀌었을때 

 형식
 1. mount / update (많이 사용하지 않는다)
   useEffect( () => {
       실행문
   })
 
 2. mount 한번만
   useEffect( () => {
       실행문
   },[])
 
 3. mount / update ( state , props **)
 : state보다 props가 더 많이 쓰임
   useEffect( () => {
       실행문
   },[의존값])
 
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
