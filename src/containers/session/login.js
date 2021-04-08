import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import sessionsCSs from './sessions.module.css';
import { login } from '../../actions/loginAction';
import { setCredentials } from '../../helpers/tokenHandler';
import LoadingIcon from '../../components/common/loadingIcon';
import UsernameAndPassword from '../../components/session/usernameAndPassword';
import Buttons from '../../components/session/buttons';

const Login = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.session);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [animateOnError, setAnimateOnError] = React.useState('');

  React.useEffect(() => {
    if (loginStatus.error) {
      setAnimateOnError(sessionsCSs.shake);
    }
  }, [loginStatus.error]);

  const handleLogin = () => {
    if (username && password) {
      const credentials = {
        username: username.trim(),
        password: password.trim(),
      };
      dispatch(login(credentials));
    }
  };

  if (loginStatus.loading) {
    return (
      <LoadingIcon />
    );
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
          <p className="h6 text-danger text-center"><em>{loginStatus.error}</em></p>
          <Buttons label1="Login" label2="Sign up" handleClick={handleLogin} />
        </form>
      </fieldset>
    </section>

  );
};

export default Login;
