import {useEffect, useState} from 'react'
import axios from 'axios'

export default async function axiosGetAll(url, setData, setLoading, setError) {
  try {
    setLoading(true)
    const response = await axios.get(url)
    console.log(response.data.data)
    setData(response.data.data)
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}
