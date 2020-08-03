import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _noUser = Object.freeze({
  id: null
});

const sessionReducer = (currentState = _noUser, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
        return _noUser;
    default:
      return currentState;
  }
};

export default sessionReducer;