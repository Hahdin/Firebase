import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    let user= JSON.parse(localStorage.getItem('user'))
    return (
      user
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  }
  } />
)