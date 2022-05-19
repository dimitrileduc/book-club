import React, {useRef, useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import {debounce} from 'lodash-es'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({
  data,
  pickBook,
  isPanelOpen,
  title,
  setBookViewToDetails,
  setBookViewToEdit,
  setData,
  setLoading,
  setError,
  error,
  loading,
}) => {
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

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

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  console.log('DATAAAA' + data)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {data?.map((book) => (
          <Book
            key={uuidv4()}
            keyId={book.id}
            book={book.attributes}
            pickBook={pickBook}
            setBookViewToDetails={setBookViewToDetails}
            setBookViewToEdit={setBookViewToEdit}
            setData={setData}
            setError={setError}
            setLoading={setLoading}
            error={error}
            loading={loading}
          />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
