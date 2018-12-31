import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../App.css';

class CustomOption extends Component {
  saveToDB = () => {
    const { editorState, description, image_link, title, path, filename } = this.props;
    console.log(this.props)
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    console.log(html)
    let today = new Date().toISOString().slice(0, 10)
    if (window.confirm('Are you sure you want to save this thing into the database?')) {

      fetch('/api/article-creator', {
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({'content':html,'title':title,'path':path,'image_link':image_link, 'description':description, "filename":filename, 'date':today})
      })
      
      .then(response => response.json())
      .then((res) => {
        res.response === 'ok' ? window.alert('file correctly saved ✅') : window.alert('file incorrectly saved ❌')
      })
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
    const html = '<p style="text-align:center;"><code> What are you going to write about today? </code></p>';
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
          style={{fontFamily:'Ubuntu,sans-serif'}}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbarCustomButtons={[<CustomOption 
            title={this.props.title}
            path={this.props.path}
            image_link={this.props.image_link}
            description={this.props.description}
            filename={this.props.filename}
            />]}
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