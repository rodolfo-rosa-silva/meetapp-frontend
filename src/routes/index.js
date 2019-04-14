import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/signin';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
  </Switch>
);

export default Routes;
