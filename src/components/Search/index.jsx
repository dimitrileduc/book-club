import React, {useRef, useState} from 'react'
import {SearchContainer, Input, Icon, Wrapper} from './styles'
import {Close} from '../../styles'

const Search = ({filterBooks}) => {
  const inputEl = useRef(null)
  const [shownOnDesktop, setShownOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShownOnDesktop(false)
  }

  const showSearch = () => {
    setShownOnDesktop(true)
  }

  return (
    <Wrapper>
      <SearchContainer $shownOnDesktop={shownOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
