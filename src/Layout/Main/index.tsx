import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Entry from '../../pages/Entry'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound/404'

const MainLayout = () => {
  let [firstEntry, setFirstEntry] = useState(true)

  return (
    <>
      {firstEntry
        ? <Entry handleEntry={() => setFirstEntry(false)}></Entry>
        : (
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/home"></Redirect> } />
            <Route path="/home" component={Home} />
            <Route path="*" component={NotFound}></Route>
          </Switch>
        )
      }
    </>
  )
}

export default MainLayout
