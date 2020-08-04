import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { createStory } from '../../actions/story_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, entities: { users, stories }}, ownProps) => ({
  currentUser: users[session.id],
  pathName: ownProps.location.pathname,
  stories: stories
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  publish: story => dispatch(createStory(story))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
