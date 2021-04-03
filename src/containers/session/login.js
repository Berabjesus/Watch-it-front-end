/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import sessionsCSs from './sessions.module.css'

const Login = () => {
  const history = useHistory();
  const loginStatus = useSelector(state => state.session)
  if (loginStatus.isLoggedIn) {
    history.push('/home')
  }

  return (
    <section className='d-flex justify-content-center pt-5 vhc-100'>
      <fieldset className={`col-9 col-md-6 align-self-start p-3 pb-4 shadow ${sessionsCSs.fieldset}`}>
        <form className='d-flex flex-column' method="post">
          <div className='input-group mb-2'>
            <label className='w-100' htmlFor="username">Username <input placeholder='Username' className='form-control border border-dark' id='username' type="text" required/></label>
          </div>
          <div className='input-group mb-2'>
            <label className='w-100' htmlFor="password"> Password <input placeholder='Password' className='form-control border border-dark' id='password' type="password" required/></label>
          </div>
        <div className="d-flex flex-column align-items-center">
          <button className='btn text-white align-self-center mt-2 bg-theme-2' type='button'>Login</button>
          <p className='pt-1'>or</p>
          <Link to="/" className="text-dark mb-0 btn-link border-bottom border-dark"><p>Sign up</p></Link>
        </div>
        </form>
      </fieldset>
    </section>
  )
}

export default Login
