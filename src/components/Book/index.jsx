import React, {useState} from 'react'
//import {Container, H2, BookList} from './styles'
import {Container, Cover, Title, Author, Button} from './styles'

import axiosDelete from '../../utils/axiosRequests/axiosDelete.js'

function Book({
  keyId,
  book,
  pickBook,
  isLarge,
  setBookView,
  setData,
  setError,
  setLoading,
  error,
  loading,
  count,
  setSelectedBookId,
}) {
  function onClickFunctionDelete() {
    axiosDelete(
      'https://stark-temple-02257.herokuapp.com/api/books/',
      setLoading,
      setError,
      keyId,
      setData
    )
    console.log(typeof bookId)
  }

  console.log('key is' + keyId)
  return (
    <Container $isLarge={isLarge} $count={count}>
      <Cover
        $isLarge={isLarge}
        alt={`Book cover for ${book.title} by ${book.author}`}
        src={book.image}
        onClick={() => {
          setBookView('read')
          pickBook(book)
        }}
      />

      <figcaption>
        <Title $isLarge={isLarge}>{book.title}</Title>
        <Author>{book.author}</Author>
      </figcaption>
      <Button
        $isLarge={isLarge}
        onClick={() => {
          setSelectedBookId(keyId)
          setBookView('edit')
          pickBook(book)
        }}
      >
        Edit
      </Button>

      <Button
        $isLarge={isLarge}
        onClick={() => {
          setBookView('read')
          pickBook(book)
        }}
      >
        View details
      </Button>

      <Button
        $isLarge={isLarge}
        onClick={() => {
          onClickFunctionDelete()
        }}
      >
        delete
      </Button>
    </Container>
  )
}

export default Book
