import * as SessionAPIUtil from '../util/session_api_util';
import { fetchStories } from '../actions/story_actions';
// NOTE: Constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

// NOTE: Regular Action Creators
const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: payload.user,
  stories: payload.stories
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveError = errors => ({
  type: RECEIVE_SESSION_ERROR,
  errors
});

// NOTE: Thunk Action Creators

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    ).then(() => dispatch(fetchStories()));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(user => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const demoUser = () => dispatch => {
  return SessionAPIUtil.demoUserLogin()
    .then(user => dispatch(receiveCurrentUser(user)));
};
