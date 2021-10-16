import React, { useState } from 'react';

const UseMapTable = () => {

    const [data, setData] = useState([
        {id : 1, name:'차학연', age:30, addr:'창원', done:true},
        {id : 2, name:'정택운', age:30, addr:'서울', done:false},
        {id : 3, name:'이재환', age:30, addr:'서울', done:true},
        {id : 4, name:'김원식', age:30, addr:'경기', done:false},
        {id : 5, name:'이홍빈', age:30, addr:'경기', done:true},
        {id : 6, name:'한상혁', age:30, addr:'강원', done:true},
    ])

    const tblStyle = {
        borderCollapse:'collapse',
        borderSpacing : 0,
        textAlign : 'center'
    }
    return (
        <table style={tblStyle}>
            <colgroup>
                <col className="w1"/>
                <col className="w2"/>
                <col className="w3"/>
                <col className="w4"/>
                <col className="w5"/>
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
                    data.map ( (item,index) => {
                        return(
                                <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                                <td>{item.done? '참석' : '불참'}</td>
                            </tr>
                        )
                    } )
                }
            </tbody>
        </table>
    );
};

export default UseMapTable;