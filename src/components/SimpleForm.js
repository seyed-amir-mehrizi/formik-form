import React, { useEffect, useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup';

function SimpleForm() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    state: '',
    zip: '',
  }

  const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is Required ....').min(3, 'First Name must be more than 3 Character'),
    lastname: Yup.string().required('Last Name is Required ....').min(3, 'Last Name must be more than 3 Character'),
    email: Yup.string().required('Email is Required ....').email('Email is Not Valid'),
    country: Yup.string().required('Country is Required ....'),
    state: Yup.string().required('State is Required ....'),
    zip: Yup.string().required('Zip is Required ....'),
  })

  const [value, setValue] = useState(initialValues);

  const handleSubmit = (values) => {
    console.log("values : ", values);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setValue({
  //       firstname: 'Amir',
  //       lastname: 'Mehrizi',
  //       email: 's.a.mehrizi1989@gmail.com',
  //       country: 'CA',
  //       state: 'toronto',
  //       zip: '12axt0089',
  //     })
  //   }, 2000);
  // }, [])
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik initialValues={value || initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} enableReinitialize>
          {
            formik => {
              console.log("formik : " , formik);
              return (
                <Form>
                  <h4 className="mb-3">Personal information</h4>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstname">First name</label>
                      <Field name="firstname"
                        type="text" className="form-control"
                        id="firstname" />
                      <ErrorMessage name="firstname">
                        {msg => <div className='alert alert-danger mt-1'>{msg}</div>}
                      </ErrorMessage>

                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastname">Last name</label>
                      <Field type="text" className="form-control" id="lastname" name="lastname" />
                      <ErrorMessage name="lastname">
                        {msg => <div className='text-danger'>{msg}</div>}
                      </ErrorMessage>

                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <Field type="email" className={ formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control" }  id="email" name="email" placeholder="you@example.com" />
                    <ErrorMessage name='email' />

                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">Country</label>
                      <Field className="custom-select d-block w-100" id="country" name="country" as="select">
                        <option value="">Choose...</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="NL">Netherlands</option>
                      </Field>
                      <ErrorMessage name='country' />


                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state">State</label>
                      <Field className="custom-select d-block w-100" id="state" name="state" as='select'>
                        <option value="">Choose...</option>
                        <option value="california">California</option>
                        <option value="toronto">Toronto</option>
                        <option value="utrech">Utrech</option>
                      </Field>
                      <ErrorMessage name='state' />


                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="zip">Zip</label>
                      <Field type="text" className="form-control" id="zip" name="zip" />
                      <ErrorMessage name='zip' />

                    </div>
                  </div>

                  <hr className="mb-4" />
                  <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Submit
                  </button>
                </Form>
              )
            }
          }
        </Formik>





      </div>
    </div>
  )
}

export default SimpleForm