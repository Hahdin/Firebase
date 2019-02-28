import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../helpers'
export const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      auth.currentUser
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  }
  } />
)