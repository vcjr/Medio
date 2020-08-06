import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        stories: window.currentUserStories 
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentUserStories;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  
  ReactDom.render(<Root store={store}/>, root);
});