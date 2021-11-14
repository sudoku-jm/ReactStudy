import React from 'react';

const GalleryItem = ({item , onView}) => {
    const {id, image, title} = item
    return (
        <li>
            <a href="javascript:;" title={title} onClick={() => onView(id)}>
                <img src={image} alt={title}/>
            </a> 
        </li>
    );
};

export default GalleryItem;