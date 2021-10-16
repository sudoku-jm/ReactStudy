import React, { useState } from 'react';

const Test12 = () => {
    const [data,setData] = useState([
        {id : 1, name:'유재석', age:40, addr:'서울', done:false},
        {id : 2, name:'이효리', age:40, addr:'제주', done:true},
        {id : 3, name:'제시', age:25, addr:'경기', done:true},
        {id : 4, name:'엄정화', age:26, addr:'전주', done:false},
        {id : 5, name:'화사', age:20, addr:'경남', done:true},
        {id : 6, name:'이수근', age:36, addr:'강원', done:false},
    ])
    return (
        <table>
            <colgroup>
                <col className="w1" />
                <col className="w2" />
                <col className="w3" />
                <col className="w4" />
                <col className="w5" />
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                    <th>참여여부</th>
                </tr>
            </thead>
            <tbody>
                { 
                /* map */
                data.map( (item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.addr}</td>
                            <td>{item.done ? '참여' : '미참여'}</td>
                        </tr>
                    )
                }) 
                }
            </tbody>
        </table>
    );
};

export default Test12;