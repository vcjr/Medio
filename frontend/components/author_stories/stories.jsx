import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
class Stories extends React.Component {
  constructor(props){
    super(props)

    this.state = {};
  } 

  updateSpan(story) {
    
    if (story.published_date) {
      return (
        <p id="span-text">Published on {moment(story.published_date).format("MMM Do YYYY")} <i className="fa fa-chevron-down mini-dropdown"><div className="mini-dropdown-content">{this.spanLinks(story)}</div></i></p>
      );
    } else {
      return (
        <p id="span-text">Last edited about {moment(story.updated_at).fromNow()} <i className="fa fa-chevron-down mini-dropdown"><div className="mini-dropdown-content">{this.spanLinks(story)}</div></i></p>
      );
    }
  };

  spanLinks(story) {
    if (this.props.pathName === 'drafts') {
      return (
        <div>
          <Link to={`/stories/${story.id}/edit`}>Edit draft</Link>
          <a onClick={this.props.deleteStory(story.id)} to={`/stories/drafts`}>Delete draft</a>
        </div>
      );
    } else {
        return (
          <div>
            <Link to={`/stories/${story.id}/edit`}>Edit story</Link>
            <a onClick={this.props.deleteStory(story.id)} to={`/stories/drafts`}>Delete story</a>
          </div>
        );
    }
  }

  sanitizeText(text) {
  return (
    text.replace(/<[^>]*>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/&nbsp;/g, '')
      .trim()
    )
  }

  render () {
    const { pathName } = this.props;

    return (
        <div className="main-story-area">
          <div className="main-story-container">
            <div className="top-stories-header">
              <h1>Your Stories</h1>
              <div className="top-stories-header-links">
                <a id="linkedIn-link" href="https://www.linkedin.com/in/victorcrispin/" alt="Victor Crispin's LinkedIn">Hire Me</a>
                <Link id="write-story-link" to="/stories/new-story">Write a story</Link>
              </div>
            </div>
            <div className="stories-switch-menu-link">
              <Link className={ pathName === "drafts" ? "link-active" : ""} to="/stories/drafts">Drafts {this.props.draftCount}</Link>
              <Link className={ pathName === "public" ? "link-active" : ""} to="/stories/public">Published {this.props.publishedCount}</Link>
            </div>
            <div className="stories-list">
              <ul>
                {
                  this.props.stories.map((story, i) => {
                    return(
                      <li key={i}>
                          <h3><Link to={`/stories/${story.id}`} id="inner-link">{this.sanitizeText(story.title)}</Link></h3>
                          <p><Link to={`/stories/${story.id}`} id="inner-link">{this.sanitizeText(story.subtitle)}</Link></p>
                          <span>{ this.updateSpan(story) }</span>
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