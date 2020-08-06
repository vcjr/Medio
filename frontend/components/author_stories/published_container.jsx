import { connect } from 'react-redux';
import Stories from './stories';

import {fetchStories} from '../../actions/story_actions';

const mapStateToProps = state => {

  const user = state.entities.users[state.session.id];
  const userStories = user.authoredStoryId.map(id => {
    return state.entities.stories[id];
  });

  const draftCount = userStories.filter(story => !story.published).length;
  const publishedCount = userStories.filter(story => story.published).length;

  return {
    stories: userStories.filter(story => story.published),
    draftCount: draftCount,
    publishedCount: publishedCount
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);