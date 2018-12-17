import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class CustomOption extends Component {
  saveToDB = () => {
    const { editorState, onChange } = this.props;

    if (window.confirm('Are you sure you want to save this thing into the database?')) {
      console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    } else {
      // Do nothing!
  }
   
  };

  render() {
    return (
      <div className="rdw-option-wrapper" onClick={this.saveToDB}>💾</div>
    );
  }
}


export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    const html = '<p> What are you going to write about today ? 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarCustomButtons={[<CustomOption />]}
          onEditorStateChange={this.onEditorStateChange}
        />

        {/* <textarea style={{width:'100%', height:'80vh'}}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}