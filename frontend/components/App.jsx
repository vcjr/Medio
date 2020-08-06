import React from 'react';
import { Link, Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NewStoryContainer from './stories/new_story_container';
import UpdateStoryContainer from './stories/update_story_container';
import ShowStoryContainer from './stories/show_story_container';
import SplashContainer from './splash/splash';
import DraftsContainer from './author_stories/drafts_container';
import PublishedContainer from './author_stories/published_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <header className="nav-stories-route-shadow">
        <NavbarContainer />
      </header>
      <Switch>  
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/stories/new-story" component={NewStoryContainer}/>
        <ProtectedRoute exact path="/stories/drafts" component={DraftsContainer}/>
        <ProtectedRoute exact path="/stories/public" component={PublishedContainer}/>
        <Route exact path="/stories/:storyId" component={ShowStoryContainer}/>
        <ProtectedRoute path="/stories/:storyId/edit" component={UpdateStoryContainer}/>

      <main>
      </main>
    </Switch>
  </div>
);

export default App;