import React from 'react'
import {P, Em} from './styles'
import Book from '../Book'

const BookEdit = ({book}) => {
  return (
    <>
      {book && (
        <>
          <h3>Here form to edit this book : {book.title}</h3>
        </>
      )}
    </>
  )
}

export default BookEdit
