import React, { useState } from 'react';

const Test10 = () => {
    const [form , setForm] = useState({
        userid : '',
        userpw : ''
    })

    const {userid,userpw} = form

    

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })

    }

    return (
        <div>
            <input type="text" value={userid} name="userid" onChange={changeInput} />
            <input type="password" value={userpw} name="userpw" onChange={changeInput}/>
            <button>제출</button>
            
        </div>
    );
};

export default Test10;