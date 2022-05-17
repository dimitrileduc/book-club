import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

import useFetch from './useFetch'

import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const {data, loading, error} = useFetch('https://book-club-json.herokuapp.com/books')
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    setFilteredBooks(data)
  }, [data])

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setSelectedBook(null)
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(data)
    } else {
      if (data !== null) {
        setFilteredBooks(
          data.filter(
            (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          )
        )
      }
    }
  }
  //console.log(filterBooks('Octavia'))

  if (!error) {
    if (loading) {
    }
    if (!loading) {
      return (
        <>
          <GlobalStyle />
          <Header>
            <Search filterBooks={filterBooks} />
          </Header>
          <BooksContainer data={filteredBooks} pickBook={pickBook} isPanelOpen={showPanel} />
          <Transition in={showPanel} timeout={300}>
            {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
          </Transition>
        </>
      )
    }
  }
}

export default App
