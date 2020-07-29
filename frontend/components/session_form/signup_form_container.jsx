import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import SessionForm from './session_form';
import { signup, demoUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <Link to='/signin'>Create One</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  demoUser: () => dispatch(demoUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);