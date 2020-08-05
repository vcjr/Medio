import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowStory from './show_story';

import { fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  story: state.entities.stories[ownProps.match.params.storyId],
  storyId: ownProps.match.params.storyId,
  pathName: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  fetchStory: storyId => dispatch(fetchStory(storyId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowStory));