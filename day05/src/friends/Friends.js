import React, { useRef, useState } from 'react';
import dataList from '../assets/api/friend'
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import './style.css'

const Friends = () => {
    const [data,setData] = useState(dataList)
    const [chk,setChk] = useState(false)
    const no = useRef(data.length+1)
    //모두 삭제
    const onRemove = () => {
        setData([])
    }

    //초기 복구
    const onRestore = () => {
        setData(dataList)
    }

    //삭제
    const onDel  = (id) => {
        setData( data.filter(item => item.id !== id))
    }

    //추가
    const onAdd = (form) => {
        form.id = no.current++
        setData([
            ...data,
           form
        ])
    }

 


    return (
        <div className="wrap">
            <h1>친구 총 인원: { data.length }명</h1>
            <p className="chk">
                <input type="checkbox" onChange={e => setChk(e.target.checked)} checked={chk} />
               
                {
                    chk? '추가 비활성' : '추가 활성'
                }
            
            </p>
            <FriendList data={data} onDel={onDel} />
            <p className="btn">
                <button onClick={onRemove}>모두 삭제</button>
                <button onClick={onRestore}>초기 복구</button>
            </p>
            {
                chk &&
                <FriendInput onAdd={onAdd} />
            }
        </div>
    );
};

export default Friends;