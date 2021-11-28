import React, { useMemo, useState } from 'react';


const Test3 = () => {
    const [cnt1,setCnt1] = useState(1) 
    const [cnt2,setCnt2] = useState(10) 

    //함수를 별도로 만들어서 return 처리할 때 (return값을 기억한다 - useMemo)
    const isEven = useMemo( () => {
        console.log('test')
        console.log( cnt1 )
        return cnt1 % 2 === 0
    },[])

    return (
        <div>
            <h2>카운트 : {cnt1}</h2>
            <button onClick={() => setCnt1( cnt1 + 1) }>증가</button>
            <hr/>

            <h2>카운트 : {cnt2}</h2>
            <button onClick={() => setCnt2( cnt2 + 1) }>증가</button>
            <hr/>
            
            <h2>{isEven ? '짝수' : '홀수'}</h2>
        </div>
    );
};

export default Test3;


/* 
    함수 컴포넌트는 렌더링 될 때마다 내부의 것들을 다시 계산처리해야함.
    생성뿐만 아니라 업데이트 될 때마다 다시 만들어지기 때문이다.
    함수형이라서 함수 실행될 때 마다 내부의 것은 메모리가 안되어서 다시 만들어 쓸 수 있다.
    그래서 등장한것이 훅(Hook)이다. / 클래스 컴포넌트처럼 사용가능.
    use*

    useMemo : return값을 기억한다.     - 함수를 별도로 만들어서 return값 처리한다.
             값이 바뀔때마다 다시계산처리되는 값 처리가 생긴다.
             같은 값을 입력하면 return값을 기억하기 때문에 실행이 빨라진다.

    useCallback : 함수를 기억한다.**


    ====

    useMemo : 잘쓰기 쉽지않다.( 많이 사용안한다. )
            + context 사용한다.

    useMemo( () => {}, deps )
    useMemo( 함수 => 의존값 )
    useMemo( 함수, [])
    useMemo( 함수, [바뀌는값])



    useCallback : 함수를 기억한다.**

    useCallback( () => {}, deps )
    useCallback( 함수 => 의존값 )
    useCallback( 함수, [])
    useCallback( 함수, [바뀌는값])



*/