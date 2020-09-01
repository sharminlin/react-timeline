import styled, { keyframes } from 'styled-components'

const StarAnimat = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate3d(0, 0, 0);
  }
  80% {
    opacity: 1;
    transform: scale(1) rotate(0) translate3d(-120vw, 80vh, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1) rotate(0) translate3d(-120vw, 80vh, 0);
  }
`

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 1;

  .star {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    top: -10px;
    left: 100%;
    background: #fff;
    z-index: 2;
    opacity: 0;
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, .3);
    transform-origin: 100% 0;
    animation: ${StarAnimat} 6s infinite ease-out;
  }
  .star:after {
    content: '';
    display: block;
    top: -10px;
    left: 200px;
    border: 0px solid #fff;
    border-width: 0px 90px 3px 90px;
    border-color: transparent transparent transparent #fff;
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
    transform: rotate(-45deg) translate3d(1px, 3px, 0);
    transform-origin: 0% 100%;
  }
  .star1 {
    top: -10px;
    left: 75%;
    animation-delay: 0.5s;
  }
  .star1:after {
    animation-delay: 0.5s;
  }
  .star2 {
    top: 100px;
    left: 50%;
    animation-delay: 0s;
  }
  .star2:after {
    animation-delay: 0;
  }
  .star3 {
    top: -10px;
    left: 25%;
    animation-delay: 1.5s;
  }
  .star3:after {
    animation-delay: 1.5s;
  }
`