import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import InputNumber from './InputNumber';

function CustomForm() {
  const initialValues = {
    nationalCode: '122',
  }
  const [value, setValue] = useState(initialValues);

  const handleSubmit = (values) => {
    console.log("values : ", values);
  }

  useEffect(() => {
    setTimeout(() => {
      setValue({
        nationalCode: '0410021751',
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
                <label htmlFor="nationalCode">National code</label>
                <Field name="nationalCode"
                  type="text" className="form-control"
                  id="nationalCode" component={InputNumber} value={initialValues.nationalCode}
                />
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

export default CustomForm