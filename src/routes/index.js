import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Preferences from '../pages/preferences';
import Dashboard from '../pages/dashboard';
import MeetupDetail from '../pages/meetup/detail';
import MeetupConfirmation from '../pages/meetup/confirmation';
import MeetupNew from '../pages/meetup/new';
import Profile from '../pages/profile';

import history from './history';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import logout from './logout';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Signin} />
      <PublicRoute path="/signin" component={Signin} />
      <PublicRoute path="/signup" component={Signup} />
      <PrivateRoute path="/preferences" component={Preferences} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute extact path="/meetup/new" component={MeetupNew} />
      <PrivateRoute exact path="/meetup/:id" component={MeetupDetail} />
      <PrivateRoute exact path="/meetup/:id/confirmation" component={MeetupConfirmation} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/logout" render={logout} />
      <Route component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
