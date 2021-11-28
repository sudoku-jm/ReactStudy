import React, { useRef, useState } from 'react';

const FriendInput = ({onAdd}) => {
    const [form,setForm] = useState({
        name : '',
        age : '',
        image : ''
    })

    const {name, age, image} = form
    const nameRef = useRef()

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if( !name || !age || !image) return

        onAdd(form)

        setForm({name:'',age:'',image:''})
        nameRef.current.focus()
    }

    return (
        <form class="formadd" onSubmit={onSubmit}>
            <p>
                <label>이름 : </label>
                <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label>나이 : </label>
                <input type="text" name="age" value={age} onChange={changeInput} />
            </p>
            <p>
                <label>사진 : </label>
                <input type="text" name="image" value={image} onChange={changeInput} />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default FriendInput;