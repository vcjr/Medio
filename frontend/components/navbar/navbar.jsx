import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    return e => this.props.logout();
  }

  render(){
    const { currentUser, logout } = this.props;

    const right_nav = () => {
      if (currentUser) {
        return (
          <> 
            <li>Hi, {currentUser.name}</li>
            //NOTE: Later create another menu that will include user profile pick and when clicked will work well
            <li><button to='/' onClick={this.handleLogout}>Sign Out</button></li>
          </>
        );
      } else {
        return (
          <>
            <li><Link to='/signin' id="sign-in-navlink">Sign in</Link></li>
            <li><Link to='/signup' id="get-started-navlink">Get Started</Link></li>
          </>
        );
      }
    };

    return (
      <nav>
        {/*NOTE Render Medio's Logo also get the font and add it to this*/}
        <Link to="/" className="medio-logo">Medio</Link>

        <ul className="right-nav">
          { right_nav() }  
        </ul>
        <h2>This is where the Nav Component Will Go :D</h2>
      </nav>
    );
  }
}

export default Navbar;