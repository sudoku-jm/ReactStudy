import React, { useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css';

const Customer = () => {
    const userData = [
        {id : 1 ,name:'이정재', job:'기훈'},
        {id : 2 ,name:'박해수', job:'상우'},
        {id : 3 ,name:'오영수', job:'일남'},
        {id : 4 ,name:'위하준', job:'준호'},
        {id : 5 ,name:'정호연', job:'새벽'},
    ]

    const [users, setUser] = useState(userData)
    const no = useRef(users.length+1)
    const [isEdit , setIsEdit] = useState(false)
    const [current , setCurrent] = useState({})   // 수정 시 수정 할 데이터를 담을 그릇.
    const [isShow,setIsShow] = useState(false)
    const [msg, setMsg] = useState('test')



    //삭제
    const onDel = (id) => {
        setUser(users.filter(item => item.id !== id))
        setIsShow(true)
        setMsg('게임 명단을 삭제했습니다.')
    }

    //추가
    const onAdd = (user) => {
        user.id = no.current++
        setUser(
            [
                ...users,
                user
            ]
        )
        setIsShow(true)
        setMsg('게임 명단을 추가했습니다.')
    }
    
    // 수정
    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
        setIsShow(true)
        setMsg('게임 명단을 수정합니다.')
    }
    
    
    //갱신(수정 업데이트)
    const onUpDate = (data) => {
        setIsEdit(false)
       setUser( users.map (user => user.id === data.id ? data: user))
       setIsShow(true)
        setMsg('게임 명단을 수정했습니다.')
    }

    return (
        <div className="Customer">
            <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>
            {
                isEdit ?  <EditUser current={current} onUpDate={onUpDate} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd}/>
            }
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;