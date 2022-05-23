import React, {useRef, useEffect, useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {debounce} from 'lodash-es'
import {Container, H2, BookList, Button} from './styles'
import './styles.css'
import Book from '../Book'

import {Transition} from 'react-transition-group'

const BooksContainer = ({
  data,
  pickBook,
  isPanelOpen,
  title,
  setBookView,
  setData,
  setLoading,
  setError,
  error,
  loading,
  setSelectedBookId,
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

  console.log(scroll)
  // Use effect to set intervall between each book render ( for animation effect) ... conflict ->  Bookcontainer.js is rendering due to setCount
  /*
  useEffect(() => {
    let counter = count
    const interval = setInterval(() => {
      if (counter >= data.length) {
        clearInterval(interval)
      } else {
        setCount((count) => count + 1)
        counter++
      }
    }, 0)
    return () => clearInterval(interval)
  }, [data])
  /*
  in jsx :  {data?.slice(0, count).map((book) => { ...
    */

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <Button
        onClick={() => {
          setBookView('add')
          pickBook()
        }}
      >
        + Add Book
      </Button>

      <H2>{title}</H2>
      <BookList>
        {data?.map((book) => {
          return (
            <Book
              key={uuidv4()}
              keyId={book.id}
              book={book.attributes}
              pickBook={pickBook}
              setBookView={setBookView}
              setData={setData}
              setError={setError}
              setLoading={setLoading}
              error={error}
              loading={loading}
              setSelectedBookId={setSelectedBookId}
            />
          )
        })}
      </BookList>
    </Container>
  )
}

export default BooksContainer
