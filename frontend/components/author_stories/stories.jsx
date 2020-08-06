import React from 'react';
import { Link } from 'react-router-dom';

class Stories extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      // published: this.props.publishedStories,
      // drafts: this.props.draftStories,
    }
  } 

  componentDidMount(){
  
  }

  populateStories() {

  }

  render () {
    const renderMainArea = () => {
      if(this.state !== null) {
        return (
          <div className="main-story-area">
            <div className="main-story-container">
              <div className="top-stories-header">
                <h1>Your Stories</h1>
                <div className="top-stories-header-links">
                  <a id="linkedIn-link" src="https://www.linkedin.com/in/victorcrispin/" alt="Victor Crispin's LinkedIn">Hire Me</a>
                  <Link id="write-story-link" to="/stories/new-story">Write a story</Link>
                </div>
              </div>
              <div className="stories-switch-menu-link">
                <Link id="drafts-link" to="/stories/drafts">Drafts {}</Link>
                <Link id="published-link" to="/stories/public">Published</Link>
              </div>
              <div className="stories-list">
                <ul>
                  {
                    this.props.stories.map(story => {
                      return(
                        <li>
                          <h2>{story.title}</h2>
                          <p>{story.subtitle}</p>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
  }

    return (
      renderMainArea()
    );
  }
}

export default Stories;