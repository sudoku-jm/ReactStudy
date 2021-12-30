//1. 액션생성
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'


//2. 액션 내보내기
export const increment = (step) => ({type : INCREMENT,step})
export const decrement = () => ({type : DECREMENT})
export const reset = () => ({type : RESET})


//3. 리듀서 만들기
const initialState = {num : 1}

const reducer = (state = initialState , action) => {
    switch( action.type ){
        case INCREMENT : 
            return{
                num : state.num +action.step
            }
        case DECREMENT : 
            return{
                num : state.num - 1
            }
        case RESET : 
            return {
                num : 0
            }
        default : 
            return state
            
    }
}

export default reducer