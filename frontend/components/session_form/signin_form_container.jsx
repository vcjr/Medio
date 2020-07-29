import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import SessionForm from './session_form';
import { login, demoUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'Log In',
  navLink: <Link to='/signup'>Sign In</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  demoUser: () => dispatch(demoUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);