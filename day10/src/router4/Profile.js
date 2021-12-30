import React from 'react';
import { Routes,  Route,  Link  } from "react-router-dom";
import Front from './Front';


const Profile = () => {
    return (
        <div className="page">
            <h1>Profile page</h1>
            <ul>
                <li><Link to="/profile/html">html</Link></li>
                <li><Link to="/profile/css">css</Link></li>
                <li><Link to="/profile/javascript">javascript</Link></li>
                <li><Link to="/profile/vue">vue</Link></li>
                <li><Link to="/profile/react">react</Link></li>
            </ul>

            <Routes>
                <Route path=":id" element={<Front />}/>
            </Routes>

        </div>
    );
};

export default Profile;