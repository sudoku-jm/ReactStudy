import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return state + action.step
        case 'DECREMENT' : 
            return state - action.step
        case 'RESET' : 
            return 0
        default :
            return state
    }
}

const Test2 = () => {

    const [ count1 ,dispatch1 ] = useReducer( reducer, initialState)
    const [ count2 ,dispatch2 ] = useReducer( reducer, 100)


    return (
        <div>
            <h1>카운트 : {count1}</h1>
            {/* dispatch( {type:'xxxx', key:값} ) -> action.type, action.key */}
            <p>
                <button onClick={ () => dispatch1 ({type:'INCREMENT', step:10}) } >10 증가</button>
                <button onClick={ () => dispatch1 ({type:'DECREMENT', step:50})}>50 감소</button>
                <button onClick={ () => dispatch1({type:'RESET'}) }>초기화</button>
            </p>
            <hr/>
            <h1>카운트 : {count2}</h1>
            <p>
                <button onClick={ () => dispatch2 ({type:'INCREMENT', step:100}) }>100 증가</button>
                <button onClick={ () => dispatch2 ({type:'DECREMENT', step:30}) } >30 감소</button>
                <button onClick={ () => dispatch2({type:'RESET'}) }>초기화</button>
            </p>
        </div>
    );
};

export default Test2;