import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//! TESTING START ~ REMOVE AFTER DONE !!!!!!!
import { signup, login, logout} from './util/session_api_util';
//! TESTING END   ~ REMOVE AFTER DONE !!!!!!!

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //! TESTING ONLY ~ REMOVE AFTER DONE !!!!!!!
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //! TESTING END   ~ REMOVE AFTER DONE !!!!!!!

  ReactDom.render(<Root store={store}/>, root);
});