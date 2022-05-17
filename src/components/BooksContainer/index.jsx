import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({data, pickBook, isPanelOpen}) => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)
    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  console.log(scroll)

  return (
    <Container $isPanelOpen={isPanelOpen}>
      <H2>All books</H2>
      <BookList>
        {data?.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
