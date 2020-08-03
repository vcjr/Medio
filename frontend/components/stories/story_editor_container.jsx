import { connect } from 'react-redux';
import { createStory } from '../../util/stories_api_util';
import StoryEditor from './story_editor';

// import {} 
const mapStateToProps = (state) => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  publish: story => dispatch(createStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEditor);