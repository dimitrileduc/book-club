import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import useFetch from './useFetch'

const App = () => {
  console.log('message displayed every time the component is renders')

  const {data, loading, error} = useFetch('https://book-club-json.herokuapp.com/books')
  if (!error) {
    if (loading) {
    }
    if (!loading) {
      console.log(data)
      return (
        <>
          <BooksContainer data={data} />
        </>
      )
    }
  }
}

export default App
