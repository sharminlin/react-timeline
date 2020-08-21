import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle, CommonStyle } from './assets/style/global'

import Home from './Layout/Home'

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <CommonStyle />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
