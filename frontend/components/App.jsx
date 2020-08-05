import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NewStoryContainer from './stories/new_story_container';
import UpdateStoryContainer from './stories/update_story_container';
import ShowStoryContainer from './stories/show_story_container';
import SplashContainer from './splash/splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <header>
        <NavbarContainer />
      </header>
      <Switch>  
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/stories/new-story" component={NewStoryContainer}/>
        <Route exact path="/stories/:storyId" component={ShowStoryContainer}/>
        <ProtectedRoute path="/stories/:storyId/edit" component={UpdateStoryContainer}/>


      <main>
      </main>
    </Switch>
  </div>
);

export default App;