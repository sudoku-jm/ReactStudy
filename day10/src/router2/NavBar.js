import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuList from './navData'

const NavBar = () => {
    const [navBar, setNavBar] = useState(false)

    const onToggle = () => {
        setNavBar(!navBar)
    }

    return (
        <>
            <div className="navbar">
                <p className="all-menu" onClick={onToggle}>allMenu</p>
            </div>
            <nav className={navBar? 'on' : ''}>
                <ul>
                    {
                        menuList.map((menu,index) => <li key={index}><Link to={menu.path}>{menu.title}</Link></li>)
                    }
                    
                </ul>
                <p className="close" onClick={()=>setNavBar(false)}>X</p>
            </nav>
        </>
    );
};

export default NavBar;