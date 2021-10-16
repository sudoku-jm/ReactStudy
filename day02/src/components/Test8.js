import React from 'react';

const Test8 = () => {
    const title = "슬기로운 의사생활2"
    const arr = ['조정석','유연석','정경호','김대명','전미도']

    const data = [
        {id : 1, name : '조정석', age:30},
        {id : 2, name : '유연석', age:30},
        {id : 3, name : '정경호', age:30},
        {id : 4, name : '김대명', age:30},
        {id : 5, name : '전미도', age:30},
    ]

    return (
        <>
            <h2>드라마명 : {title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
            <p>{arr[2]}</p>
            <p>{arr[3]}</p>
            <p>{arr[4]}</p>
            <hr/>
            {
                arr.map( (item,index) => {
                    return ( <p key={index}> {index} / {item} </p> )
                } )
            }
            <hr/>
            {/* 
                 //결과 값이 1개 일 때
                arr.map( (item, index) => console.log(index ,item) )
            */}
            {
                arr.map( (item, index) => <p key={index}>
                    {index} / {item}
                </p> )
            }
            {/* 
                map : 반복문
                key : 고유번호(주민번호) 
                        주로 index 사용하지 않는다.
                        반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 
                        고유한 값을 갖는 key속성을 포함한다( react 권고사항 )
            */}
            <hr />
            {
                data.map( (item , index) => {
                    return ( <p key={index}> {item.id} / {item.name} / {item.age}</p> )
                } )
            }
            <hr />
            {
                data.map( (item, index) => <p key={index}> {item.id} / {item.name} / {item.age}</p> )
            }
        </>
    );
};

export default Test8;