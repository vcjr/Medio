import React from 'react';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

import { defaultOptions } from '../../util/story_editor_util';
import Editor from 'react-medium-editor';

class StoryEditor extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      author_id: this.props.currentUserId,
      published: false,
      published_date: null,
      title: "",
      subtitle: "",
      body: " ",
      title_draft: "",
      body_draft: "",
      editor: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text, medium){
    return this.setState({body: text});
  }

  updateField(field){
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  render() {
    return (
      <main>
        {/* // Story Title Editor */}
        <Editor 
          tag="story-title"
          text={this.state.title}
          onChange={this.updateField("title")}
          options={defaultOptions}
        />
        <br/>
        {/* // Subtitle Editor */}


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