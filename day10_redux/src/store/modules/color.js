//1. 액션생성 : 파일명/액션명 -> 여러개의 리듀서를 만들면 액션명 겹칠 수 있다.
const PINK = 'color/PINK';
const HOTPINK = 'color/HOTPINK'
const TOMATO = 'color/TOMATO'
const ORANGE = 'color/ORANGE'


//2. 액션내보내기 - dispatch({type: 액션명}) -> dispatch( 함수())
//dispatch({type: 액션명}) -> dispatch( pink())

//dispatch는 컴포넌트에서 쓰는 것인데 , 이 곳은 컴포넌트는 아니라
//type에 해당하는 것만 따로 내보낸다.
export const pink = () => ({type : PINK})
export const hotpink = () => ({type : HOTPINK})
export const tomato = () => ({type : TOMATO})
export const orange = () => ({type : ORANGE})


//3. 리듀서 만들기 (순수함수)
const initialState = { color : 'skyblue' }  //초기화
//state에 반드시 초기값(initialState) 연결해야함
const reducer = ( state = initialState , action) => {
    switch ( action.type ){
        case PINK : 
            return{
                color : 'pink'
            }
        case HOTPINK : 
            return{
                color:'hotpink'
            }
        case TOMATO :
            return{
                color:'tomato'
            }
        case ORANGE : 
            return{
                color:'orange'
            }
        default :           // 반드시 default 들어가야함
            return state
    }
}

export default reducer