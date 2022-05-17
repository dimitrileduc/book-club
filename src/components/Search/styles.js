import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const SearchContainer = styled.div`
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;

  width: ${({$shownOnDesktop}) => ($shownOnDesktop ? '420px' : '20px')};
  transition: 300ms;

  background: #a7e1f8;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({$shownOnDesktop}) => ($shownOnDesktop ? 'block' : 'none')};
    @media (max-width: 800px) {
      display: block;
    }
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`
