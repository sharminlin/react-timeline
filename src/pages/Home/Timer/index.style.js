import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 100vw;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);

  .label-timer {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: .8rem;
    text-shadow: 2px 2px 2px #00BCD4;
  }
  .timer {
    .text {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      z-index: 1;
      margin: .1rem;
      font-weight: 900;
      font-size: 1.4em;
      color: #00B4F1;
      perspective: 400;
      transform-style: preserve-3d;

      &::before, &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: top left;
      }

      &::before {
        color: #fff;
        text-shadow: -1px 0 1px rgba(255,255,255,.8), 1px 0px 1px rgba(0,0,0,.8);
        z-index: 3;
        transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg)
      }

      &::after {
        color: rgba(0,0,0,.11);
        z-index: 2;
        transform: scale(1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 1deg);
      }
    }
  }
`
