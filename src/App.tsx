import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyle, CommonStyle } from './assets/style/global'

import MainLayout from './Layout/Main'

function App() {
  return (
    <BrowserRouter basename="/love">
      <GlobalStyle />
      <CommonStyle />
      <Switch>
        <Route path="/" component={MainLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
