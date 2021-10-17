import React from 'react';

const BusinessItem = ( { item } ) => {

    //비구조할당
    const {/* id, */ title, engtitle, image, des} = item

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

export default BusinessItem;