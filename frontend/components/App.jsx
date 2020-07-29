import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <app>
    
      <header>
        <NavbarContainer />
      </header>
      <Switch>  
      
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <main>
      </main>
    </Switch>
  
  </app>
);

export default App;