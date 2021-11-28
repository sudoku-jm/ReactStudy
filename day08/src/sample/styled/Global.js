import React from 'react';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  body{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
    line-height:1.6;
  }
  a{
      text-decoration:none; 
      color: #333;
  }
`

export default GlobalStyle;


/* 
reset css 라이브러리 사용 :  styled-components

https://www.npmjs.com/package/styled-reset

*/