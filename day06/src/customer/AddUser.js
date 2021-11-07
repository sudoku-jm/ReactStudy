import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const nameFocus = useRef()
    const [user, setUser] = useState({
        name : '',
        job : ''
    })

    const {name,job} = user

    const changeInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !job ) return 

        onAdd(user)
        
        setUser({
            name : '',
            job : ''
        })

        nameFocus.current.focus()
    }



    return (
        <form onSubmit={onSubmit}>
            <h2>오징어 게임 명단 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameFocus}/>
            </p>
            <p>
                <label>직업</label>
                <input type="text" value={job} name="job" onChange={changeInput}/>
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default AddUser;