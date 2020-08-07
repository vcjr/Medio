import { connect } from 'react-redux';
import Stories from './stories';
import { withRouter } from 'react-router-dom';
import { deleteStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[state.session.id];
  const userStories = user.authoredStoryId.map(id => {
    return state.entities.stories[id];
  });

  const draftCount = userStories.filter(story => !story.published).length;
  const publishedCount = userStories.filter(story => story.published).length;
  const pathName = ownProps.location.pathname.split("/").pop();

  return {
    stories: userStories.filter(story => !story.published),
    draftCount: draftCount,
    publishedCount: publishedCount,
    pathName: pathName
  };
};

const mapDispatchToProps = dispatch => ({
  deleteStory: storyId => dispatch(deleteStory(storyId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stories));