import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &.fade-enter, &.fade-appear {
    opacity: 0;
    transform: scale(0.9);
  }
  &.fade-enter-active, &.fade-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity .3s, transform .3s;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity .3s, transform .3s;
  }
`

export const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 2rem;
  border: 1px solid pink;
  border-radius: 4px;
  padding: 0 .8rem;
  background-color: rgba(255, 192, 203, .1);

  .input-prefix {
    flex-shrink: 0;
    color: pink;
    margin-right: .8rem;
  }

  .input {
    flex-grow: 1;
    border: none;
    outline: none;
    color: #999;
    background: transparent;
  }
` 
