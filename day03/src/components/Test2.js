import React, { useRef } from 'react';

const Test2 = () => {
    //Ref를 만들어준다.(El 변수생성). 실제 DOM을 찾아갈 수 있다.
    const colorRef = useRef(null)
    // const colorRef = React.useRef(null)


    const onSelect = () => {
        const data = {
            color : colorRef.current.value  //해당 엘리먼트 현재 값으로 data 변경
        }
        console.log(data)
        const json = JSON.stringify(data, null, 5)
        console.log(json)
    }
    return (
        <div>
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="blue">blue</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test2;