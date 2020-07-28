import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
const App = () => (
  <div>
    <header>
      <Link to="/" className="medio-logo">Medio</Link>
      <NavbarContainer />
    </header>
    <h1>Welcome to Medio!</h1>
  </div>
);

export default App;