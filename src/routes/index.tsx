import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Avatar from '../pages/Avatar';
import Home from '../pages/Home';
import Track from '../pages/Track';
import Journey from '../pages/Journey';
import Ranking from '../pages/Ranking';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/avatar" component={Avatar} isPrivate />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/track/:id" component={Track} isPrivate />
    <Route path="/journey" component={Journey} isPrivate />
    <Route path="/ranking" component={Ranking} isPrivate />
  </Switch>
);

export default Routes;
