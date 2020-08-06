import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ProfileMenu = props => {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-menu-container">
        <div className="profile-menu-popup-arrow">
          <i className="fa fa-angle-up"></i>
        </div>
        <div className="profile-menu-popup-inner">
          <ul className="profile-menu-link-container">
            <li id="profile-info">
              <img className='profile-pic'  
                src={props.profileImage} 
              />
              <div id="profile-info-name">
                <span>{props.currentUser.name}</span>
                <p>{`@${props.currentUser.name}`}</p>
              </div>
            </li>
            <hr/>
            <li>
              <Link id="profile-menu-link-regular" to="/stories/new-story">New Story</Link>
            </li>
            <li>
              <Link id="profile-menu-link-regular" to="/stories/drafts">Stories</Link>
            </li>
            <hr/>
            <li className="profile-menu-link-singout">
              <a id="profile-sign-out-link" to='/' onClick={props.logout}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
};

export default ProfileMenu;

