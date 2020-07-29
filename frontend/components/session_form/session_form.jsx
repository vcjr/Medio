import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
        email: "",
        password: "",
        isModalVisible: true,
        redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
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

  renderErrors(){
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

  toggleBox(){
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible, redirect: true}));
  }

  renderCloseIcon(){

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <div id="session-form-close">
        <span onClick={this.toggleBox} className="slash-X-regular">X</span>
      </div>
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

    const { email, password, isModalVisible } = this.state;

    return (


      <modal className={`modal-container ${isModalVisible ? "" : "hidden" }`} id="modal-container">
        <session-form className="" id="session-form-container">
          { this.renderCloseIcon() }
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
      </modal>
    );
  }
}

export default SessionForm;