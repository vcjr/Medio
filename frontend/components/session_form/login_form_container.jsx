import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In',
  navLink: <Link to='/signup'>Sign In</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);