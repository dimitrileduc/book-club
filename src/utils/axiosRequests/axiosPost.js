import axios from 'axios'
import {validateYupSchema} from 'formik'
import axiosGetAll from './axiosGetAll.js'

export default async function axiosPost(
  url,
  setLoading,
  setError,

  setData,
  values,
  key,
  notify,
  title
) {
  console.log('values title' + values)

  var dataAxios = JSON.stringify({
    data: {
      idBook: key,
      title: values.title,
      author: values.author,
      category: values.category,
      level: values.level,
      linkurl: values.linkurl,
      image: values.imageurl,
      description: values.description,
      date: values.year,
    },
  })

  var config = {
    method: 'post',
    url: 'https://stark-temple-02257.herokuapp.com/api/books/',
    headers: {
      'Content-Type': 'application/json',
    },
    data: dataAxios,
  }

  try {
    setLoading(true)
    await axios(config).then((res) =>
      console.log('return title from update is ' + res.data.data.attributes.title)
    )
    //data[0].attributes.title
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
    notify('book "' + title + '" is added')
    axiosGetAll('https://stark-temple-02257.herokuapp.com/api/books', setData, setLoading, setError)
  }
}
