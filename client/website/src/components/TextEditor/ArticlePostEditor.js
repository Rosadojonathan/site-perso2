import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Cell, Textfield, Card } from "react-mdl";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "../../css/articlecss.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FileSaverEditor from './FileSaverEditor';

// class ArticlePostEditor extends Component {




//   render() {
//     if (this.state.loaded) {
//       return (
//         <div  id="article-post-div">


//           <Grid className="article-post">
//             <Cell col={7}>
//               <div contentEditable="true"><h1>{this.state.article.title}</h1></div>
//               <div
//                 contentEditable="true"
//                 dangerouslySetInnerHTML={{
//                   __html: this.state.article.content
//                 }}>
//                 </div>
              
//             </Cell>

//           </Grid>
//         </div>
//       );
//     } else {
//       return (
//         <div style={{ textAlign: "center" }}>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
//         </div>
//       );
//     }
//   }
// }






class CustomOption extends Component {
  saveToDB = () => {
    const { editorState, article } = this.props;
    console.log(this.props)
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    console.log(html)
    let today = new Date().toISOString().slice(0, 10)
    if (window.confirm('Are you sure you want to save this thing into the database?')) {

      fetch('/api/article-updator', {
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({'content':html,'title':article.title,'path':article.path,'image_link':article.image_link, 'description':article.description})
      })
      
      .then(response => response.json())
      .then((res) => {
        res.response === 'ok' ? window.alert('file correctly updated ✅') : window.alert('file incorrectly updated ❌')
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


class ArticlePostEditor extends Component {
  constructor(props) {
    super(props);
    const html = '<p> loading </p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        article: {},
        loaded: false,
      };
    }
  }

  componentDidMount() {
    let handle = this.props.match.params.article;
    fetch(`/api/articles/${handle}`)
      .then((res) => { 
        return res.json()})
      .then((article) => { 
        console.log(article)
        return this.setState({ article, loaded: true })})
      .catch(function(error) {
        console.log(error);
      }).then(() => {
        const html = this.state.article.content;
        const contentBlock = htmlToDraft(html);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({editorState})
      });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onChangeTitle(text){
    this.setState({
        article: {...this.state.article, title:text}
    })
  }
  onChangePath(text){
    this.setState({
        article: {...this.state.article, path:text}    })
  }
  onChangeImageLink(text){
    this.setState({
        article: {...this.state.article, image_link:text}    })
  }
  onChangeDescription(text){
    this.setState({
        article: {...this.state.article, description:text}    })
  }

  render() {
    const { editorState,article } = this.state;
    return (
      <div>
        <Grid>
            <Cell col={2}></Cell>
            <Cell col={7}>
                <Editor
                editorState={editorState}
                style={{fontFamily:'Ubuntu,sans-serif'}}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbarCustomButtons={[<CustomOption 
                
                    article={article}
                    />]}
                onEditorStateChange={this.onEditorStateChange}
                />
            </Cell>
            <Cell col={3}>
                <FileSaverEditor 
                    title={this.state.article.title}
                    image_link={this.state.article.image}
                    description={this.state.article.description}
                    onChangeDescription={this.onChangeDescription.bind(this)}
                    onChangeTitle={this.onChangeTitle.bind(this)}
                    onChangeImageLink={this.onChangeImageLink.bind(this)}
                />
            </Cell>
        {/* <textarea style={{width:'100%', height:'80vh'}}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}

        </Grid>
      </div>
    );
  }
}
export default ArticlePostEditor;
