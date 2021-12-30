import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotpink, orange, pink, tomato } from '../../store/modules/color';

const Color = () => {
    //상태값가져오기
    //rootReducer에 다 합해있는 모든 state에서 가지고 오고싶은 값만 가져온다.
    //const state담을이름 = useSelector( state => state.리듀서파일명.state명 )

    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            {/* 1. 화면에 보일 UI만들기 */}
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                {/* export로 내보낸 것을 들고 오는 것. */}
                <button onClick={() => dispatch( pink() )}>pink</button>
                <button onClick={() => dispatch( hotpink() )}>hot pink</button>
                <button onClick={() => dispatch( tomato() )}>tomato</button>
                <button onClick={() => dispatch( orange() )}>orange</button>
            </p>
        </div>
    );
};

export default Color;