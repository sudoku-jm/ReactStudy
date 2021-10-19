import React, { useRef } from 'react';

const HooksUseRefSelect = () => {

    //Ref ==> id라고 생각하기!
    //Element변수 생성으로 실제 DOM을 찾아간다.
    const colorRef = useRef(null)
    // 또는
    // const colorRef = React.useRef(null)

    const onSelect = () =>{
        //객체생성
        const data = {
            color : colorRef.current.value 
            //해당 엘리먼트 cureent.value
        }
        console.log(data)

        //json으로 보기
        const json = JSON.stringify(data, null, 5)

        console.log(json)

        
    }



    return (
        <div>
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default HooksUseRefSelect;