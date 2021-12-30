import React from 'react';
import { useNavigate, useParams } from 'react-router';
import data from './data'

const User = () => {

    const {id} = useParams()
    const profile = data[id]

    console.log(id)
    console.log(profile)

    const navigate = useNavigate()

    const onGo1 = () => {
        navigate('/')
    }
    const onGo2 = () => {
        navigate('/about')
    }

    return (
        <div>
            <h1>User Page</h1>
            <h2>{profile.name} / {profile.job}</h2>
            <button onClick={onGo1}>home</button>
            <button onClick={onGo2}>about</button>
        </div>
    );
};

export default User;