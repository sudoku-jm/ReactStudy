import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import About from './router1/About';
import Ceo from './router1/Ceo';
import Home from './router1/Home';
import Profile from './router1/Profile';

const App = () => {
  return (
    /* 전체를 BrowserRouter로 감싸준다. 페이지 연동하고 왔다갔다 할 수 있게끔 지원. main에 해당하는 부분 묶어준다. */
    <BrowserRouter>
      <div>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>   {/* a태그로 잡힌다. Link는 깜빡임 없이 이동 가능.*/}
            <li><Link to="/about">About</Link></li>
            <li><Link to="ceo">Ceo</Link></li>
            <li><Link to="profile">Profile</Link></li>
          </ul>
        </nav>


        {/* 화면에 보여지는 영역 */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>   {/* path="/" 는 있어도 없어도 된다. */}
          <Route path="ceo" element={<Ceo/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;