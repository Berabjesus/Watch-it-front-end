/*eslint-disable*/
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/navigation/header'
import Login from './containers/session/login'

const App = () => (
  <>
  <Header />
    <div className='pt-5'>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  </>
);

export default App;
