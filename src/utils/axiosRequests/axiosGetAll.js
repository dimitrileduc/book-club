import {useEffect, useState} from 'react'
import axios from 'axios'

export default async function axiosGetAll(url, setData, setLoading, setError) {
  try {
    setLoading(true)
    const response = await axios.get(url)
    console.log('get return is ' + JSON.stringify(response.data))
    console.log('title is ' + response.data.data[0].attributes.title)
    setData(response.data.data)
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}
