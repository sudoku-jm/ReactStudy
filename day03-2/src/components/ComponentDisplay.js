import React from 'react';

const ComponentDisplay = ({name, ani}) => {
    return (
        <div>
            <h1>{name}가 좋아하는 동물은 {ani}입니다.</h1>
        </div>
    );
};

export default ComponentDisplay;