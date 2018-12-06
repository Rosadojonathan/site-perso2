import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Cell, Textfield, Card } from "react-mdl";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
import LikeCounter from "./LikeCounter";
import SignupForm from "./SignupForm";
import * as firebase from "firebase";

import firebasecredentials from "../firebasecredentials";

import "../css/articlecss.css";

class ArticlePost extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebasecredentials);
    this.state = {
      article: {},
      loaded: false
    };
  }

  componentDidMount() {
    let handle = this.props.match.params.article;
    fetch(`/api/articles/${handle}`)
      .then(res => res.json())
      .then(article => this.setState({ article, loaded: true }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div style={{ width: "80%", margin: "auto" }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.article[0].title} - Tech-Marketer</title>
            <meta
              name="description"
              content={this.state.article[0].description}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={this.state.article[0].title} />
            <meta
              property="og:description"
              content={this.state.article[0].description}
            />
            <meta property="og:url" content={window.location.href} />
            <meta
              property="og:image"
              content="https://jonathanrosado.fr/images/homepage.jpg"
            />
            <meta
              property="article:published_time"
              content={this.state.article[0].date}
            />
          </Helmet>

          <Grid className="article-post">
            <Cell col={9}>
              <h1>{this.state.article[0].title}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: this.state.article[0].content
                }}
              />
            </Cell>
            <Cell id="signupform" col={3}>
              <SignupForm />
            </Cell>

            <Cell col={9}>
              <div id="commentaires" style={{ textAlign: "center" }}>
                <br />
                <LikeCounter db={firebase} />
                <br />
                <CommentBox db={firebase} />
                <CommentList db={firebase} />
              </div>
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

export default ArticlePost;
