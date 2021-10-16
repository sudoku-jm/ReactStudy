import React from 'react';

const MapKey = () => {
    const title = "슬기로운 의사생활2"
    const arr = ['조정석','유연석','정경호','김대명','전미도']
    
    const titleVixx = "VIXX"
    const data = [
        {id : 1, name:'차학연', age:30},
        {id : 2, name:'정택운', age:30},
        {id : 3, name:'이재환', age:30},
        {id : 4, name:'김원식', age:30},
        {id : 5, name:'이홍빈', age:30},
        {id : 6, name:'한상혁', age:30},
    ]

    const styleList = {
        fontWeight:'bold',
        color:'blue'
    }
    
    return (
        <>
            <h2>드라마 제목 : {title}</h2>   
            <ul>
            {
                arr.map ( (item, index) => {
                    return ( <li key={index}> {index} / {item} </li>)
                })
            }
            </ul>

            <ul>
            {
                // 결과 값이 1개일 때 (객체형식이 아닐 때)
                arr.map( (item, index) => <li key={index}>{index} / {item}</li> )
            }
            </ul>

            <hr/>
            <h2>그룹명 : {titleVixx}</h2>   
            <ul>
            {
                // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key속성을 포함한다( react 권고사항 )
                data.map( (item, index) => {
                    return ( <li key={index}>{item.id} / {item.name}</li> )
                })

            }
            </ul>
            <hr/>
            <ul style={styleList}>
            {
                data.map( (item, index) => {
                    return ( <li key={index}> {item.id} / {item.name} / {item.age} </li> )
                })
            }
            </ul>
        </>
    );
};

export default MapKey;