import React from 'react';
import './router2/style.css';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import NavBar from './router2/NavBar';
import Home from './router2/Home';
import About from './router2/About';
import Project from './router2/Project';
import Profile from './router2/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;