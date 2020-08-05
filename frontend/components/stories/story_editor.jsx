import React from 'react';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

import { defaultOptions } from '../../util/story_editor_util';
import Editor from 'react-medium-editor';

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

  componentDidUpdate(prevProps, prevState){
    if (prevProps.story !== this.props.story) {
      this.setState(this.props.story);
    }
  }

  handleBody(){
    return value => {
      this.setState({ body: value });
      // console.log(this.state);
    };
  }

  handleTitle(){

    // Write an if state if the pathname I have at the moment is equal to '/stories/new-story'
    // Then send out the ajax request to submit this post and redirect me to the proper url with the new id of this post
    if (this.props.pathName === "/stories/new-story") {
      return value => {
        this.setState({ title: value });

        if (this.timerId){
          clearTimeout(this.timerId);
        }

        const newStory = Object.assign({}, this.state);

        this.timerId = setTimeout(() => {
          // This will be the function to call to make a ajax request to the backend
          // console.log('Send an ajax request');
          // debugger
          this.props.debounceNewStory(newStory);
        }, 2000);
      };
    } else {
      return value => {
        this.setState({ title: value });
        // console.log(this.state);
      };
    }
  }

  handleSubtitle(){
    // console.log(this.state);
    return value => this.setState({ subtitle: value });
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
            options={{toolbar: {buttons: ['h2', 'h3', 'quote']}, placeholder: {text: 'Title'}}}
          />
          {/* // Subtitle Editor */}
          <Editor 
            tag="p"
            className="story-subtitle"
            text={subtitle}
            // text={this.state.subtitle}
            onChange={this.handleSubtitle()}
            options={{toolbar: {buttons: ['bold', 'italic', ]}, placeholder: {text: 'Subtitle'}}}
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

//{ toolbar: { buttons: ['bold', 'italic', 'underline'] },
// placeholder: {text: 'Tell your story'}
// }
export default StoryEditor;