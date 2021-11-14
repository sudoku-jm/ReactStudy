import React from 'react';

const MenuItem = ({item,onTab}) => {
    return (
        <li onClick={() => onTab(item)}>
            {item}
        </li>
    );
};

export default MenuItem;