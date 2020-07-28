import * as SessionAPIUtil from '../util/session_api_util';

// NOTE: Constants
export default RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export default LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export default RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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