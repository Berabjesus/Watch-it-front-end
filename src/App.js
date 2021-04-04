/*eslint-disable*/
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/navigation/header'
import Footer from './containers/navigation/footer'
import Signup from './containers/session/signup'
import Login from './containers/session/login'
import Home from './containers/home/home'
import Create from './containers/create/create'

import store from './store'

const App = () => (
  <Provider store={store}>
  <Header />
    <div className='px-2 pt-5'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/create/:username" component={Create} />
      </Switch>
    </div>
  <Footer />
  </Provider>
);

export default App;
