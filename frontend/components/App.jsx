import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <main-app>
    <header>
      <NavbarContainer />
    </header>
    <h1>Welcome to Medio! REMOVE WHEN SPLASH CREATED</h1>
    <Switch>
      
      // main navcontainer

      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  
  </main-app>
);

export default App;