import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router'

const PrivateRoute = (props: RouteProps) => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin)

  return isLogin
    ? <Route { ...props } />
    : <Redirect to="/login" />
}

export default PrivateRoute
