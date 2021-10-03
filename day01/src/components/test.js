//파일명.js ,  파일명.jsx
//의존성 react -> node_modules   : 자동 경로 인식되는것이라 ./ 안씀
// ./ 는 내가 만들어서 가져오는 것
import React from 'react'


//컴포넌트명 첫글자는 반드니 대문자. - 파일명과 상관없다.
const Test1 = () => {
    //함수영역 입니다.
    return(
        <div>
            (화면에 보이는 영역)
            테스트 입니다. 
            - JSX 영역
        </div>
    )
}

//내보내기
export default Test1