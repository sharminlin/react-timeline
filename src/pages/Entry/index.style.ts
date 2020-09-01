import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: #fff;

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 2rem;
  border: 0;
  border-radius: 4px;
  padding: 0 .8rem;
  background-color: rgba(255, 192, 203, .3);
  box-shadow: 8px 8px 8px 0 rgb(255, 192, 203);

  .input-prefix {
    flex-shrink: 0;
    color: pink;
    margin-right: .8rem;
  }

  .input {
    flex-grow: 1;
    border: none;
    outline: none;
    color: pink;
    background: transparent;
  }
  ${inputPlaceholder('.input', 'pink')}
` 

function inputPlaceholder(selector: string, color: string) {
  return `
    ${selector}::-webkit-input-placeholder {
      color: ${color};
    }
    ${selector}::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: ${color};
    }
    ${selector}:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: ${color};
    }
    ${selector}:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${color};
    }
  `
}