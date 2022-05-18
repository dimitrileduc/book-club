import React from 'react'
import {P, Em} from './styles'
import Book from '../Book'

const Bookdetails = ({book}) => {
  return (
    <>
      {book && (
        <>
          <Book book={book} isLarge={true} />

          <P>{book.description}</P>
          <P>
            <Em>Published in {book.date}</Em>
          </P>

          <Em>
            <a href={book.linkurl} target="_blank" rel="noreferrer noopener">
              Link pdf
            </a>
          </Em>
        </>
      )}
    </>
  )
}

export default Bookdetails
