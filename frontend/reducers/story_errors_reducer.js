import { RECEIVE_STORY_ERRORS ,RECEIVE_STORY, RECEIVE_STORIES } from '../actions/story_actions';

const storyErrorsReducer = (currentState = [], action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors;
    case RECEIVE_STORY:
      return action.story;
    case RECEIVE_STORIES:
      return action.stories;  
    default:
      return currentState;
  }
};

export default storyErrorsReducer;