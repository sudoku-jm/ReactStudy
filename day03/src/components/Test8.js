import React, { useState } from 'react';
import Test8Animail from './Test8Animail';
import Test8Display from './Test8Display';
import Test8Name from './Test8Name';

const Test8 = () => {
    const [name, setName] = useState('')
    const [ani, setAni] = useState('')

    const onName = (e) => {
        const {value} = e.target
        setName(value)
    }

    const onAni = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <Test8Name name={name} onName={onName}/>
            <hr/>
            <Test8Animail ani={ani} onAni={onAni}/>
            <hr/>
            <Test8Display name={name} ani={ani}/>
        </div>
    );
};

export default Test8;