import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//>> 4. index.js에 스토어 생성해서 3번 리듀서 자식(자손)컴포넌트에 전달하기
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
//개발자도구
import {composeWithDevTools} from 'redux-devtools-extension'
// 리듀서 파일 불러오기(모아서 내보내기 한 리듀서 가져옴)
import rootReducer from './store' 
//스토어 생성
const store = createStore(rootReducer, composeWithDevTools()); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
