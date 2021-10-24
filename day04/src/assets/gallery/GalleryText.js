import React from 'react';

//cat 에 대한 변경된 데이터가 뿌려짐
const GalleryText = ({cat}) => {
    const {title, desc} = cat
    return (
        <div className="text">
            <strong>{title}</strong>
            <p>{desc}</p>
        </div>
    );
};

export default GalleryText;