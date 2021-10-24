import React from 'react';
import m0 from '../assets/images/m0.jpg'
import m2 from '../assets/images/m2.jpg'

const Test4 = () => {
    return (
        <div>
            {/* 다르경로로 들고오기 */}
            <img src={m0} alt=""/>
            <img src={m2} alt=""/>

            {/* public안에서 가져오기 */}
            <p>
                <img src="./images/cat1.jpg" alt=""/>
                <img src="./images/cat2.jpg" alt=""/>
            </p>
        </div>
    );
};

export default Test4;

/* 

    이미지 불러오는 방법

    1. src안에 이미지를 불러올 경우
        import 참조변수 form './이미지경로'
            <img src = {참조변수}/>

    2. public 안에 이미지 불러올 경우 **
        images 폴더
            <img src="./images/이미지명"/>


*/