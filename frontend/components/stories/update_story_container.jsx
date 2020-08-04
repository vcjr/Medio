import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateStory, fetchStory } from '../../actions/story_actions';
import StoryEditor from './story_editor';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    story: state.entities.stories[ownProps.match.params.storyId],
    storyId: ownProps.match.params.storyId
  };
};

const mapDispatchToProps = dispatch => ({
  publish: story => dispatch(updateStory(story)),
  fetchStory: storyId => dispatch(fetchStory(storyId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryEditor));