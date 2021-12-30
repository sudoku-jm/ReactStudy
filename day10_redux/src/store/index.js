import { combineReducers } from 'redux';
import color from './modules/color'
import count from './modules/count'
import changecolor from './modules/changecolor'
import todos from './modules/todos'

//리듀서 합치기
//리듀서 모아서 내보내기
export default combineReducers({
    color,     // color : color
    count,
    changecolor,
    todos
})