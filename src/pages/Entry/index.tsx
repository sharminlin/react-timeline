import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Style from './index.style'
import Background from './Background' 
import Meteor from '../../Components/Meteor'
import { loginRequest } from '../../api/index'
import { $loading } from '../../UI/Loading'

interface EntryProps {
  handleEntry: () => void
}

const Entry = ({ handleEntry }: EntryProps) => {
  const [ show, setShow ] = useState(true)

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
        }
      }).finally(() => {
        destroy()
      })
    }
  }

  return (
    <CSSTransition
      classNames="fade"
      in={show}
      timeout={300}
      onExited={handleEntry}
      appear
      unmountOnExit
    >
      <Style.Container>
        <Style.Input>
          <i className="input-prefix i-icon i-icon-lock"></i>
          <input
            ref={inputRef}
            className="input"
            type="password"
            placeholder="Enter love"
            onBlur={() => handleConfirm()}
          />
        </Style.Input>
        <Background></Background>
        <Meteor></Meteor>
      </Style.Container>
    </CSSTransition>
  )
}

export default Entry
