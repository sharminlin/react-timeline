import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Style from './index.style.js'

interface EntryProps {
  handleEntry: () => void
}

const Entry = ({ handleEntry }: EntryProps) => {
  const [ show, setShow ] = useState(true)

  return (
    <CSSTransition
      classNames="fade"
      in={show}
      timeout={600}
      onExited={handleEntry}
      appear
      unmountOnExit
    >
      <Style.Container onClick={() => setShow(false)}>
        <div>First Entry Animation</div>
      </Style.Container>
    </CSSTransition>
  )
}

export default Entry
