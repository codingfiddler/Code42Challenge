import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserDetails from './UserDetails';
import UserDetailsEmpty from './UserDetailsEmpty';

const UserDetailsLayout = () => (
  <Switch>
    <Route path="/" exact component={UserDetailsEmpty} />
    <Route path="/users/:login" component={UserDetails} />
    <Redirect to="/" />
  </Switch>
);

export default UserDetailsLayout;
