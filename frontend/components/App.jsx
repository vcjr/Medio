import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <main-app>
    <header>
      <NavbarContainer />
    </header>
    <h1>Welcome to Medio!</h1>

    <Route path="/signin" component={SigninFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </main-app>
);

export default App;