import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/navigation/header';
import Footer from './containers/navigation/footer';
import Signup from './containers/session/signup';
import Login from './containers/session/login';
import Home from './containers/home/home';
import Create from './containers/create/create';
import View from './containers/view/view';
import Chart from './containers/chart/chart';
import About from './containers/about/about';
import Error from './components/error/error';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="col-md-9 mx-auto px-2 pt-5 wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/create/:username" component={Create} />
        <Route exact path="/view/:user/:id" component={View} />
        <Route exact path="/chart/:username" component={Chart} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
    <Footer />
  </Provider>
);

export default App;
