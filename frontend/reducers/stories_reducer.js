import { RECEIVE_STORY, RECEIVE_STORIES } from "../actions/story_actions";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const storiesReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_STORY:
      return Object.assign({}, currentState, { [action.story.id]: action.story });
    case RECEIVE_STORIES:
      return Object.assign({}, currentState, action.stories);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, currentState, action.stories);
      // Extract the action.user.stories
    default:
      return currentState;
  }
};

export default storiesReducer;