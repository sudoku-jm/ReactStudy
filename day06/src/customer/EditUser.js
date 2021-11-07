import React, { useEffect, useState } from 'react';

const EditUser = ({current, onUpDate ,setIsEdit}) => {
    const [user, setUser] = useState(current)
    const { name , job} = user

    //갱신
    useEffect ( () => {
        setUser(current)
    },[current])

    const changeInput = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        onUpDate(user)

        setUser({
            name : '',
            job : ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>오징어 게임 명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label>직업</label>
                <input type="text" value={job} name="job" onChange={changeInput} />
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={() => setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;