//1. 액션생성

const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//2. 액션내보내기
export const changeColor = ( color ) => ({type : CHANGE_COLOR, color})

const initialState = {color : 'yellow'}

const reducer = ( state = initialState , action) => {
    switch (action.type) {
        case CHANGE_COLOR : 
            return {
                color:action.color
            }
        default : 
            return state
    }
}

export default reducer