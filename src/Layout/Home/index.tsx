import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Entry from '../../pages/Entry'
import NotFound from '../../pages/NotFound/404'

const Home = () => {
  let [firstEntry, setFirstEntry] = useState(true)

  return (
    <>
      {firstEntry
        ? <Entry handleEntry={() => setFirstEntry(false)}></Entry>
        : (
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/a"></Redirect> } />
            <Route path="/a" render={ () => <div>a</div> } />
            <Route path="/b" render={ () => <div>b</div> } />
            <Route path="*" component={NotFound}></Route>
          </Switch>
        )
      }
    </>
  )
}

export default Home
