import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import useFetch from './useFetch'
import {GlobalStyle} from './styles'

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)

  const pickBook = (book) => {
    setSelectedBook(book)
  }
  console.log(selectedBook)
  const {data, loading, error} = useFetch('https://book-club-json.herokuapp.com/books')
  if (!error) {
    if (loading) {
    }
    if (!loading) {
      return (
        <>
          <GlobalStyle />
          <Header />
          <BooksContainer data={data} pickBook={pickBook} />
          {selectedBook && <DetailPanel book={selectedBook} />}
        </>
      )
    }
  }
}

export default App
