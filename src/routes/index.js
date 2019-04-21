import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Preferences from '../pages/preferences';
import Dashboard from '../pages/dashboard';
import MeetupDetail from '../pages/meetup/detail';

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
      <PrivateRoute path="/meetup/:id" component={MeetupDetail} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
