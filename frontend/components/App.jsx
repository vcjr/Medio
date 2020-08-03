import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import StoryEditorContainer from './stories/story_editor_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <app>
      <header>
        <NavbarContainer />
      </header>
      <Switch>  
      
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/stories/new-story" component={StoryEditorContainer}/>

      <main>
      </main>
    </Switch>
  </app>
);

export default App;