import * as StoryAPIUtil from '../util/stories_api_util';
import React from 'react';
import { Redirect } from 'react-router-dom';

// NOTE: Constants
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS';

// NOTE: Regular Action Creators

const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
});

const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
});

// NOTE: Thunk Action Creators

export const createStory = story => dispatch => {
  return StoryAPIUtil.createStory(story)
    .then(story => dispatch(receiveStory(story)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const updateStory = story => dispatch => {
  return StoryAPIUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const deleteStory = storyId => dispatch => {
  return StoryAPIUtil.deleteStory(storyId)
    .then(() => dispatch(receiveStory(story)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const fetchStory = storyId => dispatch => {
  return StoryAPIUtil.fetchStory(storyId)
    .then(story => dispatch(receiveStory(story)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};

//NOTE: I have not set any filters yet so this will return all of the stories inside of the database
export const fetchStories = () => dispatch => {
  return StoryAPIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    );
};


// New Story debounce 
export const debounceNewStory = story => dispatch => {
  return StoryAPIUtil.createStory(story)
    .then(story => {
      dispatch(receiveStory(story));
      return story; // We return the story as the arguement for the second promise
    },
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    ).then(story => {
      window.location.hash = `#/stories/${story.id}/edit`; 
    });
};