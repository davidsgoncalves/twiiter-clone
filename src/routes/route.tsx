import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './RouteRedirect';

import Login from '../pages/Login/login';
import Dashboard from '../pages/Dashboard/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    {/* <Route path="/signup" component={SignUp} /> */}

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
