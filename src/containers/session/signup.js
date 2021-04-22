import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import sessionsCSs from './sessions.module.css';
import { signup } from '../../store/actions/loginAction';
import LoadingIcon from '../../components/common/loadingIcon';
import UsernameAndPassword from '../../components/session/usernameAndPassword';
import { setCredentials } from '../../helpers/tokenHandler';
import Buttons from '../../components/session/buttons';

const Login = () => {
  const loginStatus = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfrim, setpasswordConfrim] = React.useState('');
  const [animateOnError, setAnimateOnError] = React.useState('');

  React.useEffect(() => {
    if (requestStatus.error) {
      setAnimateOnError(sessionsCSs.shake);
    }
  }, [requestStatus.error]);

  const handleSignUp = () => {
    if (username && password) {
      const credentials = {
        username: username.trim(),
        password: password.trim(),
        password_confirmation: passwordConfrim.trim(),
      };
      dispatch(signup(credentials));
    }
  };

  if (requestStatus.loading) {
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
            requestStatus.error && Array.isArray(requestStatus.error) && requestStatus.error.length > 0 && requestStatus.error.map((err) => <em key={err} className="h6 text-danger text-decoration-none">{err}</em>)
          }
          </div>
          <Buttons label1="Sign Up" label2="Login" handleClick={handleSignUp} />
        </form>
      </fieldset>
    </section>

  );
};

export default Login;
