import React from 'react';

const GalleryBig = ({gall}) => {
    const {title,image} = gall
    return (
        <div className="bigimg">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
        </div>
    );
};

export default GalleryBig;