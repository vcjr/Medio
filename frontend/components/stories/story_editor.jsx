import React from 'react';
import editor from '../../util/story_editor_util';

class StoryEditor extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      author_id: this.props.currentUserId,
      published: false,
      published_date: null,
      title: "",
      subtitle: "",
      body: "",
      title_draft: "",
      body_draft: "",
    };
  }

  render() {
    return (
      <>
        <h3>Title</h3>
        <p>Enter your text here...</p>
        <p>{this.state.author_id}</p>
      </>
    );
  }
}

export default StoryEditor;