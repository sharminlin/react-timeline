import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Login from '../../Pages/Login'
import Home from '../../Pages/Home'
import NotFound from '../../Pages/NotFound/404'
import PrivateRoute from '../../Components/PrivateRoute'
import { useTapLove } from '../../Hooks/Components/love'
import * as Style from './index.style'

const MainLayout = () => {
  const { createLove, renderLove } = useTapLove()

  return (
    <Style.MainContainer onClick={(e) => createLove(e)}>
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/home"></Redirect> } />
        <Route path="/login" component={ Login } />
        <PrivateRoute path="/home" component={ Home } />
        <Route path="*" component={ NotFound } />
      </Switch>
      { renderLove() }
    </Style.MainContainer>
  )
}

export default MainLayout
