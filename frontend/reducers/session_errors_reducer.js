import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERROR } from '../actions/session_actions';

const sessionErrorsReducer = (currentState = [], action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_SESSION_ERROR:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return currentState;
  }
};

export default sessionErrorsReducer;