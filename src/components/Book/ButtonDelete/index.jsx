import React from 'react'
import axiosDelete from '../../../utils/axiosRequests/axiosDelete.js'
import axiosGetAll from '../../../utils/axiosRequests/axiosGetAll.js'

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

    if (!error) {
      if (loading) {
      }
      if (!loading) {
        console.log('is test')
      }
    }
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
