import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form', values)
    },
    validate: values => {
      let errors = {};

      // Used to check if email input is correct
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      
      if(regex.test(values.email) === false) errors.email = 'Username should be an email'
      if(!values.email) errors.email = 'Field Required';
      if(!values.password) errors.password = 'Field Required';

      return errors;
    }
  })

  // Called to check that the form is filled out properly
  let loginPass = () => {
    if(!formik.errors.email && !formik.errors.password && formik.values.email && formik.values.password) alert('Login Successful')
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}

        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}

        <button id="submitBtn" type="submit" onClick={loginPass}>Submit</button>
      </form>
    </div>
  );
}

export default App;
