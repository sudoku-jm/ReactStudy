import React from 'react';

const ComponentName = ( {name, onName} ) => {
    return (
        <div>
            <label>이름 : </label>
            <input type="text" value={name} onChange={onName} />
            <span style={{marginLeft:15}}>{name}</span>
        </div>
    );
};

export default ComponentName;