import React, { useState } from 'react';
import ComponentAnimail from './ComponentAnimail';
import ComponentDisplay from './ComponentDisplay';
import ComponentName from './ComponentName';

const ComponentMain = () => {
    const [name,setName] = useState('')
    const [ani,setAni] = useState('')
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
            <ComponentName name={name} onName={onName}/> 
            <hr/>
            <ComponentAnimail ani={ani} onAni={onAni}/>
            <hr/>
            <ComponentDisplay name={name} ani={ani}/>
        </div>
    );
};

export default ComponentMain;