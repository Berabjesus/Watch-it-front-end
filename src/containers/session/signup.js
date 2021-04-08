/* eslint-disable */
/* eslint-disable no-nested-ternary */

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import sessionsCSs from './sessions.module.css';
import { signup } from '../../actions/loginAction';
import LoadingIcon from '../../components/common/loadingIcon';
import UsernameAndPassword from '../../components/session/usernameAndPassword';
import { setCredentials } from '../../helpers/tokenHandler';

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
      password_confirmation: passwordConfrim.trim(),
    };
    dispatch(signup(credentials));
  };

  if (loginStatus.loading) {
    return <LoadingIcon />;
  } if (loginStatus.isLoggedIn && loginStatus.token) {
    setCredentials(loginStatus.username, loginStatus.token);
    return (
      <Redirect to={`/home/${loginStatus.username}`} />
    );
  }
  return (
    <section className="d-flex justify-content-center pt-5 vhc-100">
      <fieldset className={`col-9 col-md-6 align-self-start p-3 pb-4 shadow ${sessionsCSs.fieldset} ${animateOnError}`}>
        <form className="d-flex flex-column" method="post">
          <UsernameAndPassword setUsername={setUsername} setPassword={setPassword} />
          <div className="input-group mb-2">
            <label className="w-100" htmlFor="password_confirmation">
              Password Confirmation
              <input placeholder="Password Confirmation" className="form-control border border-dark" id="password_Confirmation" type="password" onChange={(e) => setpasswordConfrim(e.target.value)} required />
            </label>
          </div>
          <div className="d-flex flex-column align-items-start">
            {
            loginStatus.error && Array.isArray(loginStatus.error) && loginStatus.error.length > 0 && loginStatus.error.map((err) => <em className="h6 text-danger text-decoration-none">{err}</em>)
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

  );
};

export default Login;
