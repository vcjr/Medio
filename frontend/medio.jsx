import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';

//! TESTING ONLY ~ REMOVE AFTER DONE !!!!!!!
import { signup, login, logout} from './util/session_api_util';
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //! TESTING ONLY ~ REMOVE AFTER DONE !!!!!!!
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  ReactDom.render(<h1>Medio Is Up</h1>, root)
});