import { connect } from 'react-redux';
import Stories from './stories';

const mapStateToProps = state => {

  const user = state.entities.users[state.session.id];
  const userStories = user.authoredStoryId.map(id => {
    return state.entities.stories[id];
  });

  const drafts = [];
  const published = [];

  userStories.forEach(story => {
    if(story.published){
      published.push(story);
    } else {
      drafts.push(story);
    }
  });

  return {
    publishedStories: published 
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);