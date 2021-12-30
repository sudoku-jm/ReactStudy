import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Home from './router3/Home';
import About from './router3/About';
import Profile from './router3/Profile';
import Front from './router3/Front';

const data = [
  {title : 'html' , info:'html에 대한 세부 설명입니다.'},
  {title : 'css' , info:'css에 대한 세부 설명입니다.'},
  {title : 'javascript' , info:'javascript에 대한 세부 설명입니다.'},
  {title : 'vue' , info:'vue에 대한 세부 설명입니다.'},
  {title : 'react' , info:'react에 대한 세부 설명입니다.'},
]


const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            <li><Link to="/html">html</Link></li>
            <li><Link to="/css">css</Link></li>
            <li><Link to="/javascript">javascript</Link></li>
            <li><Link to="/vue">vue</Link></li>
            <li><Link to="/react">react</Link></li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path=":id" element={<Front data={data}/>}/>
            {/* :사용자정의이름 */}
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;