import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import useFetch from './useFetch'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setSelectedBook(null)
    setShowPanel(false)
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
          <BooksContainer data={data} pickBook={pickBook} isPanelOpen={showPanel} />
          <Transition in={showPanel} timeout={300}>
            {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
          </Transition>
        </>
      )
    }
  }
}

export default App
