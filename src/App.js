/*eslint-disable*/
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/navigation/header'
import Login from './containers/session/login'
import Home from './containers/home/home'
import store from './store'

const App = () => (
  <Provider store={store}>
  <Header />
    <div className='px-2 pt-5'>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </Provider>
);

export default App;
