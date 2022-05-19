import React from 'react'
//import {Container, H2, BookList} from './styles'
import {Container, Cover, Title, Author, Button} from './styles'

import ButtonDelete from './ButtonDelete'

const Book = ({
  keyId,
  book,
  pickBook,
  isLarge,
  setBookViewToDetails,
  setBookViewToEdit,
  setData,
  setError,
  setLoading,
  error,
  loading,
}) => {
  console.log('key is' + keyId)
  return (
    <Container $isLarge={isLarge}>
      <Cover
        $isLarge={isLarge}
        alt={`Book cover for ${book.title} by ${book.author}`}
        src={book.image}
        onClick={() => {
          setBookViewToDetails()
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
          setBookViewToEdit()
          pickBook(book)
        }}
      >
        Edit
      </Button>

      <Button
        $isLarge={isLarge}
        onClick={() => {
          setBookViewToDetails()
          pickBook(book)
        }}
      >
        View details
      </Button>

      <ButtonDelete
        setData={setData}
        setError={setError}
        setLoading={setLoading}
        ading
        error={error}
        loading={loading}
        bookId={keyId}
      />
    </Container>
  )
}

export default Book
//, setBookViewToDetails()
