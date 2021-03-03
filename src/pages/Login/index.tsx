import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Style from './index.style'
import Background from '../../Components/Local/Login/Background'
import Meteor from '../../Components/Local/Login/Meteor'
import { loginRequest } from '../../api/index'
import { $loading } from '../../UI/Loading'
import { useLogin } from '../../Hooks/User/login.hook'
import { Redirect } from 'react-router'

const Login = () => {
  const [ show, setShow ] = useState(true)
  const [ isLogin, setLogin ] = useLogin()

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

  // 确认输入
  function handleConfirm () {
    if (inputRef.current?.value) {
      const { destroy } = $loading({ show: true, type: 'circle' })
      loginRequest({
        user: 'lover',
        password: inputRef.current?.value || ''
      }).then((res: any) => {
        if (res.code === 200) {
          setShow(false)
          setLogin(true)
        }
      }).finally(() => {
        destroy()
      })
    }
  }

  const renderLogin = () => {
    return (
      <CSSTransition
        classNames="fade"
        in={show}
        timeout={300}
        appear
        unmountOnExit
      >
        <Style.Container>
          <Background />
          <Style.Input>
            <i className="input-prefix i-icon i-icon-lock"></i>
            <input
              ref={inputRef}
              className="input"
              type="password"
              placeholder="Enter Love's Password"
              onBlur={() => handleConfirm()}
            />
          </Style.Input>
          
          <Meteor />
        </Style.Container>
      </CSSTransition>
    )
  }

  return (
    isLogin 
      ? <Redirect to="/home" />
      : renderLogin()
  )
}

export default Login
