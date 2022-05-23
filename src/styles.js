import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  background-color: lightgrey;

  animation: fadeInFromNone 1s;

@keyframes fadeInFromNone {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


}



`
export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0%;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
