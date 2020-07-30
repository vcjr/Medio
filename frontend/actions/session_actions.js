import * as SessionAPIUtil from '../util/session_api_util';

// NOTE: Constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

// NOTE: Regular Action Creators
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
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
    );
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

// NOTE: Setup demo user here and in APIUtil's like how Anthony showed 
// NOTE: Make sure that when this action is dispatch it also removes the css display:flex on the css properties for the session form
export const demoUser = () => dispatch => {
  return SessionAPIUtil.demoUserLogin()
    .then(user => dispatch(receiveCurrentUser(user)));
};
