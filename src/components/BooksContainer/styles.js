import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
  background-color: lightgrey;
  padding: 160px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)};
`

export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 60px;
  }
`

export const Button = styled.button`
  border: 0.5px solid #efd81c;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  background-image: linear-gradient(120deg, #efd81c 0%, #efd81c 100%);
  background-repeat: no-repeat;
  background-size: 100% 0;
  background-position: 5% 100%;
  transition: background-size 0.17s ease-in;
  color: grey;
  &:hover {
    color: black;
    background-size: 100% 100%;
    border: 0.5px solid transparent;
  }
`
