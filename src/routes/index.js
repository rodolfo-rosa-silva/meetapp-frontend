import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Preferences from '../pages/preferences';

import history from './history';

import PrivateRoute from './privateRoute';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/preferences" component={Preferences} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
