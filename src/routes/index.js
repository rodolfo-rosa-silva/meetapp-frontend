import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';

import history from './history';

function isLoggedIn() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/signin',
    });
  }
}

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
