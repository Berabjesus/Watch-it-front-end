/* eslint-disable */

import React from 'react'
import sessionsCSs from './sessions.module.css'

const Login = () => {
  let test = 'test'
  return (
    <section className='d-flex justify-content-center pt-5 vh-100'>
      <fieldset className={`mt-2 w-75 h-50 p-3 ${sessionsCSs.fieldset}`}>
        <form className='d-flex flex-column' method="post">
          <div className='input-group mb-2'>
            <label className='w-100' htmlFor="username">Username <input placeholder='Username' className='form-control border border-dark' id='username' type="text" required/></label>
          </div>
          <div className='input-group mb-2'>
            <label className='w-100' htmlFor="password"> Password <input placeholder='Password' className='form-control border border-dark' id='password' type="password" required/></label>
          </div>
          <button className='btn text-white align-self-center mt-3 bg-theme-2' type='button'>Login</button>
        </form>
      </fieldset>
    </section>
  )
}

export default Login
