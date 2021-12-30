import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Home from './router5/Home';
import Profile from './router5/Profile';
import About from './router5/About';
import User from './router5/User';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>

          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/profile" element={<Profile/>}>
                <Route path=":id" element={<User />}/>
            </Route>

    
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;