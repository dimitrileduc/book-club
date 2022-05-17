import React from 'react'
import {Panel} from './styles'
import Book from '../Book'

const DetailPanel = ({book}) => (
  <Panel>
    <Book book={book} isLarge={true} />
    {/*<figure>
      <img alt="" src={book.image} />
      <h3>{book.title}</h3>
      <h4>by {book.author}</h4>
</figure>*/}

    <p>{book.description}</p>
    <p>
      <em>Published in {book.published}</em>
    </p>
  </Panel>
)

export default DetailPanel
