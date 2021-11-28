import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Cnt from './components/count/Cnt';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';
import TodosProvider from './contexts/TodosContext';
import ChangeColorProvider from './contexts/ChangeColorContext';
import CntProvider from './contexts/CntContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
// import Test4 from './components/test/Test4';
// import Test3 from './components/test/Test3';
// import Test2 from './components/test/Test2';
// import Test1 from './components/test/Test1';

const App = () => {
  return (
    <div>
      {/* <Test1/> */}
      {/* <Test2/> */}
      {/* <Test3/> */}
      {/* <Test4/> */}
      
      {/*===========
        ColorContext.js에서 만들어준 
        ColorProvider안에 
        Color를 넣어서 연결.
      */}
      <ColorProvider>
        <Color/>
      </ColorProvider>
      <hr/>

      <CountProvider>
        <Count/>
      </CountProvider>
      <hr/>

      <ChangeColorProvider>
        <ChangeColor/>
      </ChangeColorProvider>
      <hr/>

      <CntProvider>
        <Cnt/>
      </CntProvider>

      <TodosProvider>
          <Todos/>
      </TodosProvider>
    </div>
  );
};

export default App;