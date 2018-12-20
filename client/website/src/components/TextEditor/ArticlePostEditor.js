import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Cell, Textfield, Card } from "react-mdl";

import "../../css/articlecss.css";

class ArticlePostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      loaded: false
    };
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
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div  id="article-post-div">


          <Grid className="article-post">
            <Cell col={7}>
              <div contentEditable="true"><h1>{this.state.article.title}</h1></div>
              <div
                contentEditable="true"
                dangerouslySetInnerHTML={{
                  __html: this.state.article.content
                }}>
                </div>
              />
            </Cell>

          </Grid>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </div>
      );
    }
  }
}

export default ArticlePostEditor;
