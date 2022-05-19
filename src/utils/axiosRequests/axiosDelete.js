import axios from 'axios'
import axiosGetAll from './axiosGetAll.js'

export default async function axiosDelete(url, setLoading, setError, id, setData) {
  let urlDelete = url + id

  console.log(urlDelete)

  try {
    setLoading(true)
    await axios.delete(urlDelete)
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
    axiosGetAll('https://stark-temple-02257.herokuapp.com/api/books', setData, setLoading, setError)
  }
}
