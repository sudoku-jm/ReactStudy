import React, { useReducer } from 'react';


const initalState = 0       //초기값
const reducer = (state, action) => {
    switch (action.type){
        case 'INCREMENT' :
            return state + 1
        case 'DECREMENT' : 
            return state - 1
        case 'RESET' : 
            return 0
        default :
            return state
    }
}

const Test1 = () => {
    const [ count, dispatch ] = useReducer(reducer, initalState)
    //const [ state, dispatch ] = useReducer(상태업데이트 로직을 담는 함수, 초기값);
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={() => dispatch({type : 'INCREMENT'})}>증가 : INCREMENT</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}>감소 : DECREMENT</button>
                <button onClick={() => dispatch({type : 'RESET'})}>초기화 : RESET</button>
            </p>
        </div>
    );
};

export default Test1;

/* 
useReducer????

: Redux에서는 필수!
: useReducer : 상태에 관한 것.

1. 액션명 ( 별칭, 별명 ) : 한글, 영문( 대소문가 가능) : 상수형 대문자로 작성.
2. contst 함수명 = ( state, action ) => {       //state , action은 필수!
        swich( action.type ) {
            case '액션명' : 
                return 결과
            default : 
                return 결과
        }
    }


3. 
const [ state, dispatch ] = useReducer(상태업데이트 로직을 담는 함수, 초기값);
state 상태값
dispatch 액션을 발생시키는 함수(액션을 보는 것)

4.
 type 필수  -  action
 dispatch({type: '액션명'})
 dispatch({type: '액션명', 키:값})

*/