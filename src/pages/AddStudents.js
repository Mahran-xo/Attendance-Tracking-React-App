import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'


const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const AddStudent = () => (
  <Styles>
    <h1>Welcome to Our Website</h1>
    <h2>Enter Your Name , ID , and E-mail</h2>

    <Form
      onSubmit={onSubmit}render={({handleSubmit, form,submitting}) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="StudentID"
                component="input"
                type="Number"
                placeholder="ID"
              />

            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>

            </div>

          </form>
        )
      }}
    />
  </Styles>
);

export default  AddStudent;