import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

import useFetch from './utils/axiosRequests/axiosGetAll'

import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axiosGetAll from './utils/axiosRequests/axiosGetAll.js'

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [filteredBooks, setFilteredBooks] = useState([])
  const [hasFiltered, setHasFiltered] = useState(false)

  const [bookIsInEditMode, setbookIsInEditMode] = useState(false)

  useEffect(() => {
    axiosGetAll('https://stark-temple-02257.herokuapp.com/api/books', setData, setLoading, setError)
  }, [])

  useEffect(() => {
    console.log('USE EFFECT')
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

  const setBookViewToDetails = () => {
    setbookIsInEditMode(false)
    console.log('panel in View details mode')
  }

  const setBookViewToEdit = () => {
    setbookIsInEditMode(true)
    console.log('panel in View Edit mode')
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(data)
      setHasFiltered(false)
    } else {
      if (data !== null) {
        setHasFiltered(true)
        setFilteredBooks(
          data.filter(
            (book) =>
              stringSearch(book.attributes.title, searchTerm) ||
              stringSearch(book.attributes.author, searchTerm)
          )
        )
      }
    }
  }
  //console.log(filterBooks('Octavia'))
  //let hasFiltered = filterBooks.length !== data.length
  /*
  if (data !== null) {
    hasFiltered = filterBooks.length !== data.length
  }
  */
  function ConditionnalJsx() {
    if (!error) {
      if (loading) {
      }
      if (!loading) {
        return (
          <>
            <BooksContainer
              data={filteredBooks}
              pickBook={pickBook}
              isPanelOpen={showPanel}
              title={hasFiltered ? 'Search results' : 'All books'}
              setBookViewToDetails={setBookViewToDetails}
              setBookViewToEdit={setBookViewToEdit}
              setData={setData}
              setError={setError}
              setLoading={setLoading}
              error={error}
              loading={loading}
            />
            <Transition in={showPanel} timeout={300}>
              {(state) => (
                <DetailPanel
                  book={selectedBook}
                  closePanel={closePanel}
                  state={state}
                  bookIsInEditMode={bookIsInEditMode}
                />
              )}
            </Transition>
          </>
        )
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <ConditionnalJsx />
    </>
  )
}

export default App
