import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './RouteRedirect';

import Main from '../pages/Main/main';
import Dashboard from '../pages/Dashboard/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    {/* <Route path="/signup" component={SignUp} /> */}

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
