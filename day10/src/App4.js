import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Home from './router4/Home';
import About from './router4/About';
import Profile from './router4/Profile';
import Front from './router4/Front';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            {/* <li><Link to="/html">html</Link></li>
            <li><Link to="/css">css</Link></li>
            <li><Link to="/javascript">javascript</Link></li>
            <li><Link to="/vue">vue</Link></li>
            <li><Link to="/react">react</Link></li> */}
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/profile" element={<Profile/>}>
                <Route path=":id" element={<Front />}/>
            </Route>

    
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;