import { RECEIVE_STORY, RECEIVE_STORIES } from "../actions/story_actions";



const storiesReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_STORY:
    case RECEIVE_STORIES:
    default:
      return currentState;
  }
};

export default storiesReducer;