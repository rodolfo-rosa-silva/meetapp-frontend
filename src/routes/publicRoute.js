/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../services/auth';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Redirect to={{ pathname: '/dashboard' }} /> : <Component {...props} />)
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default PublicRoute;
