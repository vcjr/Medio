import React from 'react';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

import { defaultOptions } from '../../util/story_editor_util';
import Editor from 'react-medium-editor';

class StoryEditor extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.story;
    
    // {}
    this.timerId = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount(){
    if(this.props.fetchStory){
      this.props.fetchStory(this.props.storyId);
      this.setState(this.props.story);
    }
  }

  handleChange(text, medium){
    return this.setState({body: text});
  }

  updateField(field){
    return value => this.setState({ [field]: value});
  }

  handleTitle(){

    // Write an if state if the pathname I have at the moment is equal to '/stories/new-story'
    // Then send out the ajax request to submit this post and redirect me to the proper url with the new id of this post

    return value => {
      // debugger
      this.setState({ title: value });

      if (this.timerId){
        clearTimeout(this.timerId);
      }

      this.timerId = setTimeout(() => {
        // This will be the function to call to make a ajax request to the backend
        console.log('Send an ajax request');
      }, 2000);
    };
  }

  render() {
    // debugger
    if (this.props.story === undefined) {
      return null;
    }
    return (
      <main>
        {/* // Story Title Editor */}
        <Editor 
          tag="h3"
          className="story-title"
          text={this.state.title}
          onChange={this.handleTitle()}
          options={{toolbar: {buttons: ['h2', 'h3', 'quote']}, placeholder: {text: 'Title'}}}
        />
        {/* <br/> */}
        {/* // Subtitle Editor */}
        <Editor 
          tag="p"
          className="story-subtitle"
          text={this.state.subtitle}
          onChange={this.updateField("subtitle")}
          options={{toolbar: {buttons: ['bold', 'italic', ]}, placeholder: {text: 'Subtitle'}}}
        />

        {/* // Main Article Editor */}
        <Editor
          tag="story-body"
          text={this.state.body}
          onChange={this.handleChange}
          options={defaultOptions}
        />
      </main>
    );
  }
}

//{ toolbar: { buttons: ['bold', 'italic', 'underline'] },
// placeholder: {text: 'Tell your story'}
// }
export default StoryEditor;