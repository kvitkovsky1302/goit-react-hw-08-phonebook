import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../redux/auth/authSelectors';

export default function PrivatRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticate = useSelector(isAuthorized);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticate ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
