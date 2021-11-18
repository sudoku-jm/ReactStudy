import React from 'react';

const UseEffect = () => {
    return (
        <div>
            <h2>#Hooks = useEffect 설명</h2>
               
        </div>
    );
};

export default UseEffect;

/* 

 Effect Hook을 사용하면 함수 컴포넌트에서 부수효과를(side effect)를 수행할 수 있다.
부수효과?
: 함수가 결과 값을 반환하는 것 외에 다른일 할 때 그 함수는 부수효과를 가진다.
부수효과(side effect) : 비동기통신 요청/응답,DOM조작,구독/취소 등


class형
라이플사이클 : componentDidMount(처음 실행 후),
               componentDidUpdate(값이 변경된 후),
               componentWillUnmount(닫기, 로딩이 끝난 후)

함수형 useEffect는 클래스의 라이프사이클 3가지를 합쳐놓은 것이다.

형식 : useEffect(function)
React 요소가 실제 DOM에 렌더링 된후 콜백(실행)
 - useEffect화면에 렌더링이 완료된 후 실행
 - 컴포넌트가 렌더링 될 때마다 업데이트 작업을 수행
 - useEffect(콜백함수,[의존성])

 - 마운트 되었을 때(처음실행)
 - 언마운트 되었을 때(사라질 때)
 - 업데이트 되었을 때 (특정 state , 특정 props ***)가 바뀌었을 때

 <형식>
 1. mount / update (많이 사용하지 않음)
  : 처음 실행될때도 실행문이 돌지만, 업데이트 될 때도 실행문에 돌기때문에 많이 사용하지 않음.
  useEffect ( () => {
      실행문
  })

  2. mount 한번만
  useEffect( () => {
     실행문
  },[])

  3. mount / update (state, props **)
  : 어떤 값이 바뀔 대 사용.
  useEffect( () => {
      실행문
  },[의존값])

  4. mount / update (state, props **)
  : 정리(clean-up)를 이용하는 Effects , 어떤 값이 바뀔 때사용.
  useEffect ( () => {
      실행문

      return() => {
          정리(Clean-up)
      }
  },[의존값])
 */