import React from 'react'
import styled from 'styled-components'
import bgImg from './background.jpg'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Animat = () => {
  return <Container>
    <img className="img" src={bgImg} alt="" />
  </Container>
}

export default Animat
