import styled, { keyframes } from 'styled-components'

const TypingAnimation = keyframes`
  0% {
    background-color: rgba(255,255,255, 1);
    box-shadow: 12px 0 0 0 rgba(255,255,255,0.2), 24px 0 0 0 rgba(255, 255, 255, 0.2);
  }
  25% {
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 12px 0 0 0 rgb(255, 255, 255), 24px 0 0 0 rgba(255, 255, 255, 0.2);
  }
  75% {
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255, 255, 255, 1);
  }
`

const CircleAnimation = keyframes`
  0% {
    transform: rotateZ(0deg)
  }
  100% {
    transform: rotateZ(360deg)
  }
`

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(245, 132, 170, .3);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TypingLoader = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: ${TypingAnimation} 1s linear infinite alternate;
`

export const CircleLoader = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px #fff solid;
  border-radius: 50%;
  animation: ${CircleAnimation} 1s ease-in-out infinite;
  &::after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: rgba(255,255,255,1);
    border-radius: 100%;
    position: absolute;
  }
`
