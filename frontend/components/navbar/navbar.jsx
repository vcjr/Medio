import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import ProfileMenuContainer from './profile_menu_container';
import ProfileMenu from './profile_menu';
import StoryMenu from './story_menu';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // If this is a number should be the id of the current post we are editing
      currentStoryId: this.props.pathName.split("/").pop()
    };
    
  } 

  handlePublish(e){
    e.preventDefault();

    const storyId = this.props.pathName.split("/")[2];
    // debugger
    const story = Object.assign({}, this.props.stories[storyId]);
    story.published = true;
    story.published_date = new Date();
    this.props.publish(story);
    this.props.history.push(`/stories/${story.id}`);
  }

  // Nav Item
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

  // Story Nav Items
  StoryItem(props) {
    const [open, setOpen] = useState(false);

    return (
      <> 
        <li onClick={() => setOpen(!open)} className="story-menu" id="profile-menu-popup">
          <i className="fa fa-ellipsis-h"></i>
          { open && props.children}
        </li> 
      </>
    );
  }

  render(){
    const { currentUser, logout, publish } = this.props;

    const story_nav = () => {

      const renderPublish = () => {
        const editRoute = this.props.pathName.split("/").pop() === "edit" ? true : false;
        if (this.props.pathName === '/stories/new-story' || editRoute ) {
          return true
        } else {
          return false;
        }
      }

      if(currentUser && renderPublish() ) {
        return (
          <>
            <button id="story-publish-btn" onClick={e => this.handlePublish(e)}>Publish</button>
            <this.StoryItem>
              <StoryMenu currentUser={currentUser} publish={publish} />
            </this.StoryItem>
          </>
        )
      } else {
        return (
          <>
          </>
        )
      }
    };

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
            { story_nav() }
            <li><a href="https://github.com/vcjr/"><i className="fa fa-github" id="github-icon"></i></a></li>
            { right_nav() }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;