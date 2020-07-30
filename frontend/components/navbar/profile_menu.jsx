import React from 'react';
import { Link } from "react-router-dom";

// class ProfileMenu extends React.Component {

//   render(){
//     return(
//     <div className="profile-menu-container">
//       <div className="profile-menu-popup-inner">
//         <ul className="profile-menu-link-container"></ul>
//       </div>
//       <div className="profile-menu-popup-arrow"></div>
//     </div>
//     );
//   }
// }

const ProfileMenu = props => (
  <div className="profile-menu-container">
      <div className="profile-menu-popup-inner">
        <ul className="profile-menu-link-container">
          <li>Hi, {props.currentUser.name}</li>
          <li className="profile-menu-link-singout">
            <a id="get-started-navlink" to='/' onClick={props.logout}>
              Sign Out
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-menu-popup-arrow"></div>
  </div>
);

export default ProfileMenu;

