import React, { useReducer } from 'react';


const initialState = { width: 100 } //초기값.객체화 시킴
const reducer = (state, action) => {
    
    switch (action.type) {
        case 'PLUS' : 
            return {
                width : state.width + action.step
            }
        case 'MINUS' : 
            return {
                width: state.width - action.step
            }
        case 'RESET' : 
            return{
                width : 100
            }
        default : 
            return {
                width: state.width
            }
    }
}

const Test3 = () => {
    const [state , dispatch] = useReducer( reducer, initialState)   //초기값연결.
    return (
        <>
            <div style={{background:'pink', width:state.width, height:100, transition:'0.3s', margin:10}}   //객체화되어 있는 변수를 연결
            ></div>
            <p>
                <button onClick={ () => dispatch({type : 'PLUS', step : 20})}>증가</button>
                
                <button onClick={ () => dispatch({type: 'MINUS', step : 30})}>감소</button>
               
                <button onClick={ () => dispatch({type : 'RESET'})}>원래대로</button>
            </p>
        </>
    );
};

export default Test3;


