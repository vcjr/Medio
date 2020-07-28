import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (currentState = [], action) => {
  Object.freeze(currentState);

  let newState = currentState.slice(0);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState.concat(action.errors);
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return currentState;
  }
};

export default sessionErrorsReducer;