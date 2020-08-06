import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { updateStory } from '../../actions/story_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, entities: { users, stories }}, ownProps) => {
  let profileImage = "";
  if (session.id && users[session.id].photoUrl){
    profileImage = users[session.id].photoUrl;
  }

  return {
    currentUser: users[session.id],
    profileImage: profileImage,
    pathName: ownProps.location.pathname,
    stories: stories
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  publish: story => dispatch(updateStory(story))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
