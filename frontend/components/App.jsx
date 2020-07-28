import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
const App = () => (
  <main-app>
    <header>
      <NavbarContainer />
    </header>
    <h1>Welcome to Medio!</h1>
  </main-app>
);

export default App;