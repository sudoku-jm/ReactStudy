import React, { useEffect, useReducer } from 'react';
/* 외부에서 데이터 가져오는 연습 + reduce */
import axios from  'axios'

const initialState = {
    loading : true,
    error : '',
    data : {}   //객체로 데이터 가지고 옴. 
} 

const reducer = (state, action) => {
    // console.log(action.data);
    switch (action.type) {
        case 'SUCCESS' :   
            return{
                loading : false,
                data : action.payload,
                error : ''
            }
        case 'ERROR' : 
            return{
                loading : true,
                data : {},
                error : '데이터를 찾을 수 없습니다.'
            }
        default : 
            return state
    }
}

const Test4 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( res => {
            dispatch({type : 'SUCCESS',payload : res.data}) //들어온 데이터를 넘김
        })
        .catch( error => {
            dispatch({type : 'ERROR'})
        })
    },[])

    return (
        <div>
            <h3>{state.data && state.loading ? '로딩중' : state.data.title}
            </h3>
            <p>{state.error ? state.error : null}</p>
        </div>
    );
};

export default Test4;


/* 
yarn add axios 설치 후 진행.
*/