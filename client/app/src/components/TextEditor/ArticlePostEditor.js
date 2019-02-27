import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Cell, Tab, Card, Navigation } from "react-mdl";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "../../css/articlecss.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FileSaverEditor from './FileSaverEditor';
import { Link } from 'react-router-dom';
import '../../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class CustomOption extends Component {
  saveToDB = () => {
    const { editorState, article } = this.props;
    console.log(this.props)
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    console.log(html)
    let today = new Date().toISOString().slice(0, 10)
    if (window.confirm('Are you sure you want to save this thing into the database?')) {

      fetch('/api/article-updator', {
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('https://jonathanrosado.fr:state')).token}`
        }),
        method: 'POST',
        body: JSON.stringify({ 'content': html, 'title': article.title, 'path': article.path, 'image_link': article.image_link, 'description': article.description })
      })

        .then(response => response.json())
        .then((res) => {
          res.response === 'ok' ? window.alert('file correctly updated ✅') : window.alert('file incorrectly updated ❌')
        })
    } else {
      // Do nothing!
    }

  }

  destroyArticle = () => {
    const { article } = this.props;
    if (window.confirm('Are you sure you want to delete this article?')) {

      fetch('/api/article-destroyer', {
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('https://jonathanrosado.fr:state')).token}`
        }),
        method: 'POST',
        body: JSON.stringify({ 'path': article.path })
      })

        .then(response => response.json())
        .then((res) => {
          res.response === 'ok' ? window.alert('file correctly deleted ✅') : window.alert("file wasn't deleted ❌")
        })
    } else {
      // Do nothing!
    }

  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div className="rdw-option-wrapper" onClick={this.saveToDB}>💾</div>
        <div className="rdw-option-wrapper" onClick={this.destroyArticle}>❌</div>
      </div>
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
        return res.json()
      })
      .then((article) => {
        console.log(article)
        return this.setState({ article, loaded: true })
      })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        const html = this.state.article.content;
        const contentBlock = htmlToDraft(html);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState })
      });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onChangeTitle(text) {
    this.setState({
      article: { ...this.state.article, title: text }
    })
  }
  onChangePath(text) {
    this.setState({
      article: { ...this.state.article, path: text }
    })
  }
  onChangeImageLink(text) {
    this.setState({
      article: { ...this.state.article, image_link: text }
    })
  }
  onChangeDescription(text) {
    this.setState({
      article: { ...this.state.article, description: text }
    })
  }

  render() {
    const { editorState, article } = this.state;
    return (
      <div>
        <Grid>
          <Cell col={2} style={{ backgroundColor: "lavender", height: "500vh" }}>
            <Navigation>
              <Link className="is-active" id="back-button" to="/admin">
                <div className="mdl-tabs__tab mdl-tabs__tab-bar is-active mdl-tabs__ripple-container mdl-tabs mdl-js-tabs mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded " style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
                  Back
                </div>
              </Link>
            </Navigation>
          </Cell>
          <Cell col={7}>
            <Editor
              editorState={editorState}
              style={{ fontFamily: 'Ubuntu,sans-serif' }}
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


        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { token: state.token };
};
export default withRouter(connect(mapStateToProps, null)(ArticlePostEditor));
