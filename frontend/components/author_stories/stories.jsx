import React from 'react';
import { Link } from 'react-router-dom';

class Stories extends React.Component {
  constructor(props){
    super(props)

    this.state = {};
  } 

  render () {
    const { pathName } = this.props;

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
              <Link id={ pathName === "drafts" ? "link-active drafts-link" : "drafts-link"} to="/stories/drafts">Drafts {this.props.draftCount}</Link>
              <Link id={ pathName === "public" ? "link-active published-link" : "published-link"} to="/stories/public">Published {this.props.publishedCount}</Link>
            </div>
            <div className="stories-list">
              <ul>
                {
                  this.props.stories.map((story, i) => {
                    return(
                      <li key={i}>
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
  }
}

export default Stories;