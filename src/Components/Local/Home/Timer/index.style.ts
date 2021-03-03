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
    text-shadow: 2px 2px 2px #998078;
  }
  .timer {
    .text {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      z-index: 1;
      width: 1rem;
      margin: .1rem;
      font-weight: 900;
      font-size: 1em;
      color: #FFF;
      text-shadow: 2px 0px 2px #998078;
    }
  }
`
