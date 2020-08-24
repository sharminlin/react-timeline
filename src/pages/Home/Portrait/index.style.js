import styled, { keyframes } from 'styled-components'

const NenoAnimation = keyframes`
  0% {
    text-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 16px #f6e6eb, 0 0 32px #f6e6eb, 0 0 64px #f6e6eb;
  }
  100% {
    text-shadow: 0 0 0 #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #f6e6eb, 0 0 16px #f6e6eb, 0 0 32px #f6e6eb;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  .heart {
    flex-shrink: 0;
    font-size: 2rem;
    color: rgba(249, 176, 195);
    animation: ${NenoAnimation} 1.5s ease-in-out infinite alternate;
  }
  .h-line {
    box-sizing: border-box;
    flex-grow: 1;
    margin: 0 1.2rem;
    height: 1px;
    background-color: #fff;
  }
`

export const HeadPortrait = styled.div`
  flex-shrink: 0;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;

  .avatar {
    width: 100%;
    height: 100%;
  }
`
