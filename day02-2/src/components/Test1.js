import React from 'react';


//서브 컴포넌트 선언
// props 값 전달.
const Test1Sub = ( props ) =>{
    return (
        <>{/* 플래그먼트 선언! */}

            <li>{props.name}, {props.age}</li>
        </>
    );
};
const Test2Sub = ( props ) =>{

    const {name, age} = props

    return (
        <>{/* 플래그먼트 선언! */}

            <li>{props.name}, {props.age}</li>
        </>
    );
};

const Test3Sub = ( {name, age} ) =>{

    return (
        <>
        <li>{name}, {age}</li>
        </>
    );
};


const Test1 = () => {

    const data1 = {name:'차학연', age:30}
    
    const data2 = [
        {name:'차학연', age:30},
        {name:'정택운', age:30},
        {name:'이재환', age:29},
        {name:'김원식', age:28},
        {name:'이홍빈', age:27},
        {name:'한상혁', age:26},
    ]

    return (
        <>
            방법.1
            <ul>
               <Test1Sub name={data1.name} age={data1.age} />
            </ul>
        
            방법.2
            <ul>
               <Test2Sub name={data1.name} age={data1.age} />
            </ul>

            방법.3
            <ul>
                <Test3Sub {...data1}/>
            </ul>

        </>
    );
};

export default Test1;