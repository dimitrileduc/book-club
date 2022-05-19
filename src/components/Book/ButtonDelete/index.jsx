import React from 'react'
import axiosDelete from '../../../utils/axiosRequests/axiosDelete.js'

function ButtonDelete({setData, setError, setLoading, error, loading, bookId}) {
  function onClickFunction() {
    axiosDelete(
      'https://stark-temple-02257.herokuapp.com/api/books/',
      setLoading,
      setError,
      bookId,
      setData
    )
    console.log(typeof bookId)
  }
  return (
    <button
      onClick={() => {
        onClickFunction()
      }}
    >
      Delete
    </button>
  )
}

export default ButtonDelete
