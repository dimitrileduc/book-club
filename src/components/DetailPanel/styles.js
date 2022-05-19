import styled from 'styled-components'

export const Panel = styled.article`
  background-color: #ffffff;
  border-left: 2px solid #000;
  height: calc(100vh - 82px);
  width: 400px;
  position: fixed;
  z-index: 2;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-400px')};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh-75px);
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
    z-index: 3;
  }
`

export const CloseWrapper = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`
