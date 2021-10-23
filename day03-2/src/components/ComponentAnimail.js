import React from 'react';

const ComponentAnimail = ({ani, onAni}) => {
    return (
        <div>
            <label>동물이름 : </label>
            <input type="text" value={ani} onChange={onAni} />
            <span>{ani}</span>
        </div>
    );
};

export default ComponentAnimail;