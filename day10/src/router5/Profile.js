import React from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import User from './User';


const Profile = () => {
    return (
        <div className="page">
            <h1>Profile page</h1>
            <ul>
                <li><Link to="/profile/user1">전지현</Link></li>
                <li><Link to="/profile/user2">차학연</Link></li>
                <li><Link to="/profile/user3">정택운</Link></li>
                <li><Link to="/profile/user4">이재환</Link></li>
                <li><Link to="/profile/user5">김원식</Link></li>
            </ul>

            <Routes>
                <Route path=":id" element={<User/>}/>
            </Routes>
        </div>
    );
};

export default Profile;