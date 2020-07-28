import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (currentState = {}, action) => {

  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, currentState, { [action.currentUser.id]: action.currentUser });
    default:
      return currentState;
  }
};

export default usersReducer;