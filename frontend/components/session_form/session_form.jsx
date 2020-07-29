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
  }

  // NOTE: Handle subitting session form 
  handleSubmit(e){
    e.preventDefault();
    
    const user = {
      user: this.state
    };
    this.props.processForm(user);
  }

  //NOTE: Update fields dynamically by setting state
  updateField(field){
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  renderErrors() {
    return (
      <ul>
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
            <div className="session-form-subheader">
              <h2>Sign up with email</h2>
            </div>
          );
        case "Log In":
          return (
            <div className="session-form-subheader">
              <h2>Sign in with email</h2>
            </div>
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

      <session-form>
        <h3>{this.props.formType}</h3>
        { formTopSection(this.props.formType) }
        <form onSubmit={this.handleSubmit}>
          { this.renderErrors() }
          <label htmlFor="email">Your email</label>
          <input type="text" 
            onChange={this.updateField('email')} 
            value={email}
            id="email"
          />

          <label htmlFor="password">Your password</label>
          <input type="password" 
            onChange={this.updateField('password')} 
            value={password}
            id="password"
          />
          <input type="submit" className="session-submit" value="Continue"/>
        </form>
        { formBottomSection(this.props.formType) }
      </session-form>
    );
  }
}

export default SessionForm;