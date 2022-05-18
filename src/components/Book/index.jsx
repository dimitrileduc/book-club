import React from 'react'
//import {Container, H2, BookList} from './styles'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge, setBookViewToDetails, setBookViewToEdit}) => (
  <Container $isLarge={isLarge}>
    <Cover
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
    <button
      onClick={() => {
        setBookViewToEdit()
        pickBook(book)
      }}
    >
      Edit
    </button>
  </Container>
)

export default Book
//, setBookViewToDetails()
