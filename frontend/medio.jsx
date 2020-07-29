import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//! TESTING START ~ REMOVE AFTER DONE !!!!!!!
// import { login, logout } from './actions/session_actions';
//! TESTING END   ~ REMOVE AFTER DONE !!!!!!!

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //! TESTING ONLY ~ REMOVE AFTER DONE !!!!!!!
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  //! TESTING END   ~ REMOVE AFTER DONE !!!!!!!

  ReactDom.render(<Root store={store}/>, root);
});