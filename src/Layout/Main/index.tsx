import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { changeFirstEntryAction } from './store'

import Entry from '../../pages/Entry'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound/404'
import * as Style from './index.style'
import { useTapLove } from '../../Hooks/love'

const MainLayout = () => {
  const firstEntry = useSelector((state: RootState) => state.main.firstEntry)
  const dispatch = useDispatch()
  const { createLove, renderLove } = useTapLove()

  return (
    <Style.MainContainer onClick={(e) => createLove(e)}>
      {firstEntry
        ? <Entry handleEntry={() => dispatch(changeFirstEntryAction(false))}></Entry>
        : (
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/home"></Redirect> } />
            <Route path="/home" component={Home} />
            <Route path="*" component={NotFound}></Route>
          </Switch>
        )
      }
      { renderLove() }
    </Style.MainContainer>
  )
}

export default MainLayout
