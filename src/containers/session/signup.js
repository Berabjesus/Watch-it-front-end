/* eslint-disable */
/* eslint-disable no-nested-ternary */

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SpiralSpinner } from 'react-spinners-kit';
import sessionsCSs from './sessions.module.css';
import { signup } from '../../actions/loginAction';

const Login = () => {
  const loginStatus = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfrim, setpasswordConfrim] = React.useState('');
  const [animateOnError, setAnimateOnError] = React.useState('');

  React.useEffect(() => {
    console.log(loginStatus.error);
    if (loginStatus.error) {
      setAnimateOnError(sessionsCSs.shake);
    }
  }, [loginStatus.error]);

  const handleLogin = () => {
    const credentials = {
      username: username.trim(),
      password: password.trim(),
      password_confirmation: passwordConfrim.trim()
    };
    dispatch(signup(credentials));
  };
  return (
    <>
      {
      loginStatus.loading ? (
        <span className="d-flex flex-column align-items-center centered">
          <SpiralSpinner size={120} frontColor="#42B5E8" loading />
          <p className="h6 font-weight-light mt-3">Signing In...</p>
        </span>
      ) : loginStatus.isLoggedIn && loginStatus.token ? (<Redirect to={`/home/${loginStatus.username}`} />) : (
        <section className="d-flex justify-content-center pt-5 vhc-100">
          <fieldset className={`col-9 col-md-6 align-self-start p-3 pb-4 shadow ${sessionsCSs.fieldset} ${animateOnError}`}>
            <form className="d-flex flex-column" method="post">
              <div className="input-group mb-2">
                <label className="w-100" htmlFor="username">
                  Username
                  <input placeholder="Username" className="form-control border border-dark" id="username" type="text" onChange={(e) => setUsername(e.target.value)} required />
                </label>
              </div>
              <div className="input-group mb-2">
                <label className="w-100" htmlFor="password">
                  Password
                  <input placeholder="Password" className="form-control border border-dark" id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                </label>
              </div>
              <div className="input-group mb-2">
                <label className="w-100" htmlFor="password_confirmation">
                  Password Confirmation
                  <input placeholder="Password Confirmation" className="form-control border border-dark" id="password_Confirmation" type="password" onChange={(e) => setpasswordConfrim(e.target.value)} required />
                </label>
              </div>
              <div className='d-flex flex-column align-items-start'>
              {
                loginStatus.error && loginStatus.error.length > 0 && loginStatus.error.map(err => {
                  return <em className="h6 text-danger text-decoration-none">{err}</em>
                })
              }
              </div>
              <div className="d-flex flex-column align-items-center">
                <button className="btn text-white align-self-center mt-2 bg-theme-2" type="button" onClick={handleLogin}>Sign Up</button>
                <p className="pt-1">or</p>
                <Link to="/login" className="text-dark mb-0 btn-link border-bottom border-dark"><p>Login</p></Link>
              </div>
            </form>
          </fieldset>
        </section>
      )
    }
    </>
  );
};

export default Login;
