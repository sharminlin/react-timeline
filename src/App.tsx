import React from 'react';
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyle, CommonStyle } from './assets/style/global'
import './assets/style/iconfont.css'
import store from './store'

import MainLayout from './Layout/Main'

function App() {
  return (
    <BrowserRouter basename="/love">
      <GlobalStyle />
      <CommonStyle />
      <Provider store={store}>
        <Switch>
          <Route path="/" component={MainLayout}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
