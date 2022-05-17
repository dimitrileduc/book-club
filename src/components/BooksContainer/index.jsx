import React from 'react'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({books, data}) => (
  <Container>
    <H2>All books</H2>
    <BookList>
      {data?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
