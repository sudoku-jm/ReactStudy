import React from 'react';

const CoffeeItem = ({item}) => {
    const {id, title, name, price, img, desc} = item
    return (
        <li>
            <img src={img} alt={title} />
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{desc}</p>
        </li>
    );
};

export default CoffeeItem;