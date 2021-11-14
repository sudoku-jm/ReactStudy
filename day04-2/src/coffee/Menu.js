import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menuList,onTab}) => {
    return (
        <ul className="menu">
            {
                menuList.map((item,index) => <MenuItem key={index} item={item} onTab={onTab}/> )
           
            }
        </ul>
    );
};

export default Menu;