import React from 'react';

const GalleryText = ({gall}) => {
    const {title,desc} = gall
    return (
        <div className="text">
            <strong>{title}</strong>
            <p>{desc}</p>
        </div>
    );
};

export default GalleryText;