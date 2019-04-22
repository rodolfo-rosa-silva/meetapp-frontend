import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Preferences from '../pages/preferences';
import Dashboard from '../pages/dashboard';
import MeetupDetail from '../pages/meetup/detail';
import MeetupConfirmation from '../pages/meetup/confirmation';
import Profile from '../pages/profile';

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
      <PrivateRoute exact path="/meetup/:id" component={MeetupDetail} />
      <PrivateRoute exact path="/meetup/:id/confirmation" component={MeetupConfirmation} />
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
