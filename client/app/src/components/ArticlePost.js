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
      .then((res) => { 
        return res.json()})
      .then((article) => { 
        return this.setState({ article, loaded: true })})
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div  id="article-post-div">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.article.title} - Tech-Marketer</title>
            <meta
              name="description"
              content={this.state.article.description}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={this.state.article.title} />
            <meta
              property="og:description"
              content={this.state.article.description}
            />
            <meta property="og:url" content={window.location.href} />
            <meta
              property="og:image"
              content={window.location.origin + this.state.article.image}
            />
            <meta
              property="article:published_time"
              content={this.state.article.createdAt}
            />
            <script type="application/ld+json">
            {`{
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage":{
            "@type":"WebPage",
            "@id":"${window.location.href}"
            },
            "headline": "${this.state.article.title}",
            "datePublished": "${new Date(this.state.article.createdAt).toISOString().split("T")[0]}",
            "dateModified":"${new Date(this.state.article.createdAt).toISOString().split("T")[0]}",
            "author": {
            "@type": "Person",
            "name": "Jonathan Rosado"
            },
            "image":{
              "@type":"ImageObject",
              "url":"${window.location.origin + this.state.article.image}"
            },
            "publisher":{
              "@type":"Organization",
              "name":"jonathanrosado.fr",
              "logo":{
                "@type":"ImageObject",
                "url":"https://jonathanrosado.fr/static/media/thinking.59151a6a.jpeg"
              }
            },
            "description": "${this.state.article.description}"

          }`}
              
              
              
          </script>
          </Helmet>

          <Grid className="article-post">
            <Cell col={9}>
              <article>
                <h1>{this.state.article.title}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.state.article.content
                  }}        
                />
                <small> Écrit le <time pubdate={this.state.article.createdAt}>{new Date(this.state.article.createdAt).toISOString().split("T")[0]}</time> </small>
              </article>
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
