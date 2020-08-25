import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Style from './index.style'

import Loading from '../../UI/Loading'

interface EntryProps {
  handleEntry: () => void
}

const Entry = ({ handleEntry }: EntryProps) => {
  const [ show, setShow ] = useState(true)

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

  function handleConfirm () {
    if (inputRef.current?.value === 'LNLXM') {
      setShow(false)
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
      </Style.Container>
    </CSSTransition>
  )
}

export default Entry
