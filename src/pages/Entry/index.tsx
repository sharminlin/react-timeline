import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Style from './index.style.js'

import Loading from '../../UI/Loading'

interface EntryProps {
  handleEntry: () => void
}

const Entry = ({ handleEntry }: EntryProps) => {
  const [ show, setShow ] = useState(true)

  return (
    <CSSTransition
      classNames="fade"
      in={show}
      timeout={300}
      onExited={handleEntry}
      appear
      unmountOnExit
    >
      <Style.Container onClick={() => setShow(false)}>
        <Loading show={true} type='circle'></Loading>
      </Style.Container>
    </CSSTransition>
  )
}

export default Entry
