import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, currentState, { [action.user.id]: action.user });
    default:
      return currentState;
  }
};

export default usersReducer;