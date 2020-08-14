import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Wrong from './components/Error';
import Certificate from './components/Certificate';
import './global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/index' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/certificate' exact component={Certificate} />
        <Route path='/wrong' component={Wrong} />
        <Route component={Wrong} />
      </Switch>
    </BrowserRouter>
  );
}       