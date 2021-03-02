import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { Route, Redirect } from 'react-router'

const PrivateRoute = (props: any) => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin)

  return isLogin
    ? <Route { ...props } />
    : <Redirect to="/login" />
}

export default PrivateRoute
