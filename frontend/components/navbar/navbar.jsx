import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    const { currentUser, logout } = this.props;

    const right_nav = () => {
      if (currentUser) {
        return (
          <> 
            <li>Hi, {currentUser.name}</li>
            {/* //NOTE: Later create another menu that will include user profile pick and when clicked will work well */}
            <li><button to='/' onClick={logout}>Sign Out</button></li>
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
        <Link to="/" id="medio-logo">Medio</Link>

        <ul className="right-nav">
          <li><a href="https://github.com/vcjr/">Github Icon Here</a></li>
          { right_nav() }  
        </ul>
      </nav>
    );
  }
}

export default Navbar;