import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStory, debounceNewStory } from '../../actions/story_actions';
import StoryEditor from './story_editor';


const mapStateToProps = (state, ownProps) => {

  const newStory = {
    author_id: state.session.id,
    published: false,
    published_date: null,
    title: " ",
    subtitle: " ",
    body: " ",
    title_draft: " ",
    body_draft: " "
  };

  return {
    currentUserId: state.session.id,
    story: newStory,
    storyId: null,
    pathName: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  publish: story => dispatch(createStory(story)),
  debounceNewStory: story => dispatch(debounceNewStory(story))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryEditor));