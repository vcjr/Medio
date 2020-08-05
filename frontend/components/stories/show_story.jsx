import React from 'react';
import Editor from 'react-medium-editor';
import { nonEditableEditor } from '../../util/story_editor_util';
class ShowStory extends React.Component {
  constructor(props){
    super(props);

    if (this.props.story){
      this.state = this.props.story;
    }
  }

  componentDidMount(){
    this.props.fetchStory(this.props.storyId)
      .then(story => {
        this.setState(story);
      });
  }

  componentDidUpdate(prevProps){
    if (prevProps.story !== this.props.story) {
      if ((this.props.currentUserId === this.props.story.author_id) && (this.props.story && this.props.story.published !== true)){
        return this.props.history.push(`/stories/${this.props.storyId}/edit`);
      } else if (this.props.story && this.props.story.published !== true) {
        return this.props.history.push("/");
      }
    }
  }

  renderStory() {
    if (this.state !== null) {
      let title = this.state.title ||this.props.story.title;
      let subtitle = this.state.subtitle || this.props.story.subtitle;
      let body = this.state.body || this.props.story.body;
      return (
        <main>
          <Editor 
            tag="h2"
            className="story-title"
            text={title}
            options={{toolbar: false,  disableEditing: true, spellcheck: false}}
          />

          {/* // Subtitle Editor */}
          <Editor 
            tag="p"
            className="story-subtitle"
            text={subtitle}
            options={{toolbar: false,  disableEditing: true, spellcheck: false}}
          />

          {/* // Main Article Editor */}
          <Editor
            tag="story-body"
            className="story-body"
            text={body}
            options={{toolbar: false,  disableEditing: true, spellcheck: false}}
          />
        </main>
      );
    } else {
      return null;
    }
  }

  render () {
    return (
      <>
      { this.renderStory() }
      </>
    );
  }
}

export default ShowStory;