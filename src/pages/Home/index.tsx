import React from 'react'
import * as Style from './index.style'
import Timer from '../../Components/Local/Home/Timer'
import Portrait from '../../Components/Local/Home/Portrait'
import Heart from '../../Components/Heart'

const Home = () => {
  return (
    <Style.Container>
      <Portrait />
      <Timer />
      <Heart />
    </Style.Container>
  )
}

export default Home
