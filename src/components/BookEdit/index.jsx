import React from 'react'
import {P, Em} from './styles'
import Book from '../Book'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const BookEdit = ({book}) => {
  return (
    <Formik
      initialValues={{
        title: '',
        author: '',

        category: '',
        level: '',

        linkurl: '',
        imageurl: '',
        year: '',
        description: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Sorry, this is required').max(30, 'Sorry, title is too long'),
        author: Yup.string()
          .required('Sorry, this is required')
          .max(30, 'Sorry, author is too long'),

        linkurl: Yup.string()
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
          )
          .required('Please enter valid url'),
        imageurl: Yup.string()
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
          )
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
        console.log(JSON.stringify(values) + 'form submitted')
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        <div className="container">
          <div className="col-md-12 mt-5">
            <form onSubmit={(values) => handleSubmit(values)}>
              <h4 className="mb-3">Edit book information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="title">Title</label>
                  <input
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
                  <label htmlFor="author">author</label>
                  <input
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
                  <label htmlFor="category">Category</label>
                  <select
                    className="custom-select d-block w-100"
                    id="category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="JS">Javascript</option>
                    <option value="TY">Typescript</option>
                    <option value="RE">React</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="level">Level</label>
                  <select
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
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="linkurl">Link of pdf file</label>
                  <input
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
                  <label htmlFor="imageurl">Link of cover image</label>
                  <input
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
                  <label htmlFor="year">Year of publication</label>
                  <input
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

              <label for="description">Description</label>

              <Field
                id="decription"
                name="description"
                component="textarea"
                rows="4"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
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
        </div>
      )}
    </Formik>
  )
}

export default BookEdit
