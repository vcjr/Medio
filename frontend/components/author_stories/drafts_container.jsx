import { connect } from 'react-redux';
import Stories from './stories';

import {fetchStories} from '../../actions/story_actions';

const mapStateToProps = state => {

  const user = state.entities.users[state.session.id];
  const userStories = user.authoredStoryId.map(id => {
    return state.entities.stories[id];
  });

  return {
    stories: userStories.filter(story => !story.published),
     
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);