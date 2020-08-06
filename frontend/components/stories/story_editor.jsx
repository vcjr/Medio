import React from 'react';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

import { defaultOptions } from '../../util/story_editor_util';
import Editor from 'react-medium-editor';
import { Redirect } from 'react-router-dom';

class StoryEditor extends React.Component {
  constructor(props){
    super(props);

    if (this.props.story){
      this.state = this.props.story;
    }

    this.timerId = null;

    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
  }

  componentDidMount(){
    if(this.props.fetchStory){
      this.props.fetchStory(this.props.storyId);
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.story !== this.props.story) {
      if (this.props.story && this.props.story.author_id !== this.props.currentUserId) {
        return this.props.history.push("/");
      }
      this.setState(this.props.story);
    }
  }

  handleBody(){
    return value => {
      this.setState({ body: value });
      
      if (this.timerId){
        clearTimeout(this.timerId);
      }

      const updatedStory = Object.assign({}, this.state);

      this.timerId = setTimeout(() => {
        this.props.updateStory(updatedStory);
      }, 1000);
    };
  }

  handleTitle(){
    if (this.props.pathName === "/stories/new-story") {
      return value => {
        this.setState({ title: value });

        if (this.timerId){
          clearTimeout(this.timerId);
        }

        const newStory = Object.assign({}, this.state);

        this.timerId = setTimeout(() => {
          this.props.debounceNewStory(newStory);
        }, 1500);
      };
    } else {
      return value => {
        this.setState({ title: value });

        if (this.timerId){
          clearTimeout(this.timerId);
        }

        const updatedStory = Object.assign({}, this.state);

        this.timerId = setTimeout(() => {
          this.props.updateStory(updatedStory);
        }, 1500);
      };
    }
  }

  handleSubtitle(){
    return value => { 
      this.setState({ subtitle: value });

      if (this.timerId){
        clearTimeout(this.timerId);
      }

      const updatedStory = Object.assign({}, this.state);

      this.timerId = setTimeout(() => {
        this.props.updateStory(updatedStory);
      }, 1500);
    };
  }

  render() {
    if (this.props.story === undefined) {
      return null;
    }

    if (this.state !== null ) {
      let title = this.state.title ||this.props.story.title;
      let subtitle = this.state.subtitle || this.props.story.subtitle;
      let body = this.state.body || this.props.story.body;

      return (
        <main>
          {/* // Story Title Editor */}
          <Editor 
            tag="h3"
            className="story-title"
            text={title}
            // text={this.state.title}
            onChange={this.handleTitle()}
            options={{toolbar: {buttons: ['h2', 'h3', 'quote']}, placeholder: {text: 'Title', hideOnClick: false}}}
          />
          {/* // Subtitle Editor */}
          <Editor 
            tag="p"
            className="story-subtitle"
            text={subtitle}
            // text={this.state.subtitle}
            onChange={this.handleSubtitle()}
            options={{toolbar: {buttons: ['bold', 'italic', ]}, placeholder: {text: 'Subtitle', hideOnClick: false}}}
          />

          {/* // Main Article Editor */}
          <Editor
            tag="story-body"
            className="story-body"
            text={body}
            // text={this.state.body}
            onChange={this.handleBody()}
            options={defaultOptions}
          />
        </main>
      );
    } else {
      return <h1>Story Editor Is Still Loading...</h1>
    }
  }
}

export default StoryEditor;