import React, {useState, useEffect} from 'react'

import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

import axiosGetAll from './utils/axiosRequests/axiosGetAll.js'
import {useCallback} from 'react'

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [selectedBookId, setSelectedBookId] = useState(null)

  const [showPanel, setShowPanel] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [filteredBooks, setFilteredBooks] = useState([])
  const [hasFiltered, setHasFiltered] = useState(false)

  const [bookViewType, setBookViewType] = useState('read')

  const notify = (mess) =>
    toast.success(mess, {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  useEffect(() => {
    axiosGetAll('https://stark-temple-02257.herokuapp.com/api/books', setData, setLoading, setError)
  }, [])

  useEffect(() => {
    console.log('USE EFFECT')
    setFilteredBooks(data)
  }, [data])

  const pickBook = useCallback((book) => {
    if (book) {
      setSelectedBook(book)
    }

    setShowPanel(true)
  }, [])

  const closePanel = () => {
    setSelectedBook(null)
    setShowPanel(false)
  }

  const setBookView = (type) => {
    setBookViewType(type)
    console.log('type view is ' + bookViewType)
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
              setBookView={setBookView}
              setData={setData}
              setError={setError}
              setLoading={setLoading}
              error={error}
              loading={loading}
              setSelectedBookId={setSelectedBookId}
              notify={notify}
            />
          </>
        )
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>

      <ConditionnalJsx />

      <Transition in={showPanel} timeout={100}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
            bookViewType={bookViewType}
            selectedBookId={selectedBookId}
            setLoading={setLoading}
            setError={setError}
            setData={setData}
            notify={notify}
          />
        )}
      </Transition>
    </>
  )
}

export default App
