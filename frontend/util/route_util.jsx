import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props}/> : <Redirect to="/" />
    }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props}/> : <Redirect to="/signin" />
    }
    />
);

const AuthorProtected = ({ component: Component, path, loggedIn, currentUser, authorId, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props =>
      (loggedIn && (currentUser === authorId))  ? <Component {...props}/> : <Redirect to="/" />
    }
    />
);

const mapStateToPropsAuthorProtected = (state, ownProps) => {
  debugger
  const authorId = state.entities.stories[ownProps.computedMatch.params.storyId];

  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.session.id,
    authorId: authorId
  }
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);

export const AuthorProtectedRoute = withRouter(
  connect(mapStateToPropsAuthorProtected)(AuthorProtected)
);

