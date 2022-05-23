import styled, {keyframes} from 'styled-components'

export const Container = styled.figure`
  margin: 0;
`

export const Cover = styled.img`
  filter: ${({$isLarge}) => ($isLarge ? 'grayscale(0%)' : 'grayscale(100%)')};
  border: 2px solid transparent;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: ${({$isLarge}) => ($isLarge ? '60%' : '100%')};
  margin-bottom: 16px;
  transition: ${({$isLarge}) => ($isLarge ? 'none' : 'all 0.2s ease-in-out')};
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(0.97);
    border: 2px solid black;
  }
`

export const Title = styled.h3`
  font-size: ${({$isLarge}) => ($isLarge ? '42px' : '28px')};
  margin: 0 0 10px 0;
  line-height: 1.3;

  @media (max-width: 800px) {
    font-size: ${({$isLarge}) => ($isLarge ? '32px' : '22px')};
  }
`

export const Author = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
`
export const Button = styled.button`
  display: ${({$isLarge}) => ($isLarge ? 'none' : 'block')};
  border: none;
  background: transparent;
  cursor: pointer;
  background-image: linear-gradient(120deg, #efd81c 0%, #efd81c 100%);
  background-repeat: no-repeat;
  background-size: 90% 0;
  background-position: 5% 100%;
  transition: background-size 0.17s ease-in;
  color: grey;
  &:hover {
    color: black;
    background-size: 100% 88%;
  }
`
