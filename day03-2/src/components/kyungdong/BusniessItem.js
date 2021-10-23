import React from 'react';

const BusniessItem = ({item}) => {
    /* 비구조할당 */
    const {/* id, */image,title,engtitle,des} = item
    return (
        <li>
            <a href="#">
                <div><img src={image} alt={title} /></div>
                <h3>
                    {title}
                    <span>{engtitle}</span>
                </h3>
                <p>{des}</p>
            </a>
        </li>
    );
};

export default BusniessItem;