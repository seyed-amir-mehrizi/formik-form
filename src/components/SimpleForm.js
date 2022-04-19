import React, { useEffect, useState } from 'react'

import { Formik, Form, Field } from 'formik'

function SimpleForm() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    state: '',
    zip: '',
  }

  const [value, setValue] = useState(initialValues);

  const handleSubmit = (values) => {
    console.log("values : ", values);
  }

  useEffect(() => {
    setTimeout(() => {
      setValue({
        firstname: 'Amir',
        lastname: 'Mehrizi',
        email: 's.a.mehrizi1989@gmail.com',
        country: 'CA',
        state: 'toronto',
        zip: '12axt0089',
      })
    }, 2000);
  }, [])
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik initialValues={value || initialValues} onSubmit={handleSubmit} enableReinitialize>
          <Form>
            <h4 className="mb-3">Personal information</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname">First name</label>
                <Field name="firstname"
                  type="text" className="form-control"
                  id="firstname" />

              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <Field type="text" className="form-control" id="lastname" name="lastname" />

              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <Field type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
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

              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <Field className="custom-select d-block w-100" id="state" name="state" as='select'>
                  <option value="">Choose...</option>
                  <option value="california">California</option>
                  <option value="toronto">Toronto</option>
                  <option value="utrech">Utrech</option>
                </Field>

              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <Field type="text" className="form-control" id="zip" name="zip" />
              </div>
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </Form>
        </Formik>





      </div>
    </div>
  )
}

export default SimpleForm