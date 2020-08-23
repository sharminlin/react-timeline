import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate3d(-50%, -50%, 0);

  .label-timer {
    font-size: 1rem;
    color: #333;
    margin-bottom: .8rem;
  }
  .timer {
    font-size: 1rem;
    color: #666;
  }
`
