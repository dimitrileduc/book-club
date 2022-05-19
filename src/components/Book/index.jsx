import React from 'react'
//import {Container, H2, BookList} from './styles'
import {Container, Cover, Title, Author, Button} from './styles'

const Book = ({book, pickBook, isLarge, setBookViewToDetails, setBookViewToEdit}) => (
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
  </Container>
)

export default Book
//, setBookViewToDetails()
