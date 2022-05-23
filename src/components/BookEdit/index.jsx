import React from 'react'
import {Label, Input, Select, Container, DescriptionArea} from './styles'
import Book from '../Book'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axiosUpdate from '../../utils/axiosRequests/axiosUpdate.js'
import {useState} from 'react'

const BookEdit = ({book, selectedBookId, setLoading, setError, setData, closePanel}) => {
  let bookCategory = ''
  if (book) {
    bookCategory = book.category
  }
  const [selectBoxValue, setSelectBoxValue] = useState(bookCategory)

  if (book) {
    return (
      <Formik
        initialValues={{
          title: book.title,
          author: book.author,

          category: selectBoxValue,
          level: book.level,

          linkurl: book.linkurl,
          imageurl: book.image,
          year: book.date,
          description: book.description,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Sorry, this is required')
            .min(5, 'Title is too short')
            .max(30, 'Sorry, title is too long'),
          author: Yup.string()
            .required('Sorry, this is required')
            .max(30, 'Sorry, author is too long'),

          linkurl: Yup.string()
            .url()
            .typeError('you must specify a valide url')
            .required('Please enter valid url'),
          imageurl: Yup.string()
            .url()
            .typeError('you must specify a valide url')
            .required('Please enter valid url'),

          year: Yup.number()
            .required('Please enter a Year date')
            .typeError('you must specify a valide Year date')
            .min(2015, 'Min value 2015.')
            .max(2099, 'Max value 2099.'),

          description: Yup.string()
            .required('Sorry, this is required')
            .max(300, 'Sorry, description is too long'),
        })}
        onSubmit={(values) => {
          closePanel()
          console.log('id book' + selectedBookId + 'is ->' + typeof values.title + 'form submitted')
          axiosUpdate(
            'https://stark-temple-02257.herokuapp.com/api/books',
            setLoading,
            setError,
            selectedBookId,
            setData,
            values,
            selectBoxValue
          )
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
          <Container className="container">
            <div className="col-md-12 mt-5">
              <form onSubmit={(values) => handleSubmit(values)}>
                <h4 className="mb-3">Edit book information</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? (
                      <span style={{color: 'red'}}>{errors.title}</span>
                    ) : null}
                  </div>
                  <div className="col-md-6 mb-3">
                    <Label htmlFor="author">author</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="author"
                      name="author"
                      value={values.author}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.author && touched.author ? (
                      <span style={{color: 'red'}}>{errors.author}</span>
                    ) : null}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <Label htmlFor="category">Category</Label>
                  </div>

                  <div
                    id="category"
                    name="category"
                    onChange={handleChange}
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        checked={selectBoxValue === 'JS'}
                        value="JS"
                        onChange={() => setSelectBoxValue('JS')}
                      />
                      JS
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        checked={selectBoxValue === 'TY'}
                        value="TY"
                        onChange={() => setSelectBoxValue('TY')}
                      />
                      Typescript
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        checked={selectBoxValue === 'RE'}
                        value="RE"
                        onChange={() => setSelectBoxValue('RE')}
                      />
                      React
                    </label>
                  </div>

                  <div className="col-md-4 mb-3">
                    <Label htmlFor="level">Level</Label>
                    <Select
                      className="custom-select d-block w-100"
                      id="level"
                      name="level"
                      value={values.level}
                      onChange={handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="be">Beginner</option>
                      <option value="int">Intermediate</option>
                      <option value="dif">Difficult</option>
                    </Select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <Label htmlFor="linkurl">Link of pdf file</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="linkurl"
                      name="linkurl"
                      value={values.linkurl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.linkurl && touched.linkurl ? (
                      <span style={{color: 'red'}}>{errors.linkurl}</span>
                    ) : null}
                  </div>

                  <div className="col-md-6 mb-3">
                    <Label htmlFor="imageurl">Link of cover image</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="imageurl"
                      name="imageurl"
                      value={values.imageurl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.imageurl && touched.imageurl ? (
                      <span style={{color: 'red'}}>{errors.imageurl}</span>
                    ) : null}
                  </div>

                  <div className="col-md-3 mb-3">
                    <Label htmlFor="year">Year of publication</Label>
                    <Input
                      type="number"
                      className="form-control"
                      min="2015"
                      max="2099"
                      step="1"
                      id="year"
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.year && touched.year ? (
                      <span style={{color: 'red'}}>{errors.year}</span>
                    ) : null}
                  </div>
                </div>

                <Label for="description">Description</Label>

                <Field
                  id="decription"
                  name="description"
                  component="textarea"
                  className="descriptionArea"
                  rows="8"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{width: '300px'}}
                ></Field>
                {errors.description && touched.description ? (
                  <span style={{color: 'red'}}>{errors.description}</span>
                ) : null}

                <hr className="mb-4" />
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Container>
        )}
      </Formik>
    )
  }
}

export default BookEdit
