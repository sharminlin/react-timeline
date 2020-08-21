import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);

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
