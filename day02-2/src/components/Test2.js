import React from 'react';


//서브 컴포넌트 선언
// props 값 전달.
const Test1Sub = ( {name, age}  ) =>{
    return (
        <>{/* 플래그먼트 선언! */}

            <li>{name}, {age}</li>
        </>
    );
};




const Test1 = () => {

    
    const data = [
        {name:'차학연', age:30},
        {name:'정택운', age:30},
        {name:'이재환', age:29},
        {name:'김원식', age:28},
        {name:'이홍빈', age:27},
        {name:'한상혁', age:26},
    ]
    

    const data2 = ['차학연','정택운']
    const data3 = {name:'한상혁', age:26}

    return (
        <>
            <p>{data[0].name}</p>           
            <hr/>
            map으로 돌리기
            {   
                data.map( (item, index ) => {
                    return ( <p key={index}>{item.name}</p> )
                } )
            }
             <hr/>
            map으로 돌리기 : 결과 값이 1개<br />
            * 객체의 경우는 안됨. 배열은 ㅇㅋ
            {
                data2.map((item,index) => <p key={index}>{item}</p>)
            }
            <hr/>

            <Test1Sub {...data3} />    

         
            
        </>
    );
};

export default Test1;