import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
        email: "",
        password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  // NOTE: Handle subitting session form 
  handleSubmit(e){
    e.preventDefault();
    
    const user = {
      user: this.state
    };
    this.props.processForm(user);
  }

  handleDemoUser(e){
    e.preventDefault();
    this.props.demoUser();
  }

  //NOTE: Update fields dynamically by setting state
  updateField(field){
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  renderErrors() {
    return (
      <ul className="form-session-errors">
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  render(){

    const formTopSection = (formType) => {
      switch (formType) {
        case "Sign Up":
          return (
            <>
              <div id="session-form-subheader">
                <h2>Sign up with email</h2>
              </div>
              <div id="session-form-subheader-text">
                <p>Enter your email address to create an account.</p>
              </div>
            </>
          );
        case "Log In":
          return (
            <>
              <div id="session-form-subheader">
                <h2>Sign in with email</h2>
              </div>
              <div id="session-form-subheader-text">
                <p>Enter the email address associated with your account.</p>
              </div>
            </>
          );
      }
    };

    const formBottomSection = (formType) => {
      switch (formType) {
        case "Sign Up":
          return (
            <div className="session-form-link">
              <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            </div>
          );
        case "Log In":
          return (
            <div className="session-form-link">
              <p>No account? <Link to="/signup">Create one</Link></p>
            </div>
          );
      }
    }

    const { email, password } = this.state;

    return (

      <session-form id="session-form-container">
        { formTopSection(this.props.formType) }
        <form onSubmit={this.handleSubmit} id="session-form">
          <label htmlFor="email" className="form-field-label">Your email</label>
          <input type="text" 
            onChange={this.updateField('email')} 
            value={email}
            id="email"
            className="form-field"
          />

          <label htmlFor="password" className="form-field-label">Your password</label>
          <input type="password" 
            onChange={this.updateField('password')} 
            value={password}
            id="password"
            className="form-field"
          />
          { this.renderErrors() }
          <input type="submit" className="session-submit" value="Continue"/>
        </form>
          <button className="session-submit" onClick={ this.props.demoUser }>Demo User</button>
        { formBottomSection(this.props.formType) }
      </session-form>
    );
  }
}

export default SessionForm;