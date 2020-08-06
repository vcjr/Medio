import React from 'react';
import { Link } from 'react-router-dom';

class Stories extends React.Component {
  render () {
    return (
      <main>
        <div className="top-stories-header">
          <h1>Your Stories</h1>
          <a src="https://www.linkedin.com/in/victorcrispin/" alt="Victor Crispin's LinkedIn">Send a Job Request</a>
          <Link to="/stories/new-story">Write a story</Link>
        </div>
        <div className="stories-switch-menu-link">
          <Link to="/stories/drafts">Drafts</Link>
          <Link to="/stories/public">Published</Link>
        </div>
      </main>
    );
  }
}

export default Stories;