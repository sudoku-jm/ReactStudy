import React from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div className="wrap">
            {/* className = {참조변수.클래스명} */}
            <div className="box"></div>
            <div className={myStyle.box}></div>

            {/* 다중 클래스 */}
            <div className="size bg"></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>
        
            {/* 다중클래스 : 배열형식 */}
            <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
            <div className={['size', myStyle.bg].join(' ')}></div>

            {/* 독립클래스(global) : 모듈에서 독립적으로 써야할 때 , 일반 클래스명처럼 붙음*/}
            <div className="mybox"></div>
        </div>
    );
};

export default Test3;


/*
    // Test3.module.css / Test3.css

    module.css
    클래스 이름의 중첩을 제거하기 위해서 사용
    기존 프로젝트의 css클래스와 이름이 중복되어 있어도 스타일이 꼬이지 않게 작업가능

    Box.module.css / scss
    import 참조변수 from './Box.module.css'
    https://mui.com/components/radio-buttons/#radio-group
     
    클래스 적용 : 파일명_클래스명__아무말

*/