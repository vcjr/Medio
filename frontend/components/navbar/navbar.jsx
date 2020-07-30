import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ProfileMenuContainer from './profile_menu_container';
import ProfileMenu from './profile_menu';
class Navbar extends React.Component {

  constructor(props){
    super(props);

  }

  NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
      <> 
        <li className="profile-picture-menu" id="profile-menu-popup">
          <img className='profile-pic' 
            id='profile-pic-small' 
            src={window.profileImg} 
            onClick={() => setOpen(!open)}
          />

          { open && props.children}
        </li> 
      </>
    );
  }

  render(){
    const { currentUser, logout } = this.props;

    const right_nav = () => {
      if (currentUser) {
        return (
          <> 
            <this.NavItem>
              <ProfileMenu currentUser={currentUser} logout={logout} />
            </this.NavItem>
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
      <nav className="nav-container">
        <div className="nav-section">
          <Link to="/" id="medio-logo">Medio</Link>
          <ul className="right-nav">
            <li><a href="https://github.com/vcjr/"><i className="fa fa-github" id="github-icon"></i></a></li>
              { right_nav() }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;