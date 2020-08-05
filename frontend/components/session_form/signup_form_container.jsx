import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import SessionForm from './session_form';
import { signup, demoUser, receiveError } from '../../actions/session_actions';
import { fetchStories } from '../../actions/story_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <Link to='/signin'>Create One</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  fetchStories: () => dispatch(fetchStories()), 
  demoUser: () => dispatch(demoUser()),
  addError: error => dispatch(receiveError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);