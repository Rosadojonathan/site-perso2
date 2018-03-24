import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import { Grid, Cell, Card, CardTitle, CardMenu,IconButton, CardText, CardActions,Link} from 'react-mdl';

import Article from './article.js';
import '../App.css'

class Blog extends Component {
  constructor(props){
    super(props);
    this.state={ posts:[]}
  }

  componentDidMount(){
    fetch('/posts')
    .then(res => res.json())
    .then(posts => this.setState({posts}))
    .catch(function(error){
      console.log(error);
    });

  }

  render() {
    return (
    <div className="article-grid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Tech-Marketer</title>

        <meta name="description" content="Comment allier le Marketing et la Tech pour améliorer son efficacité."/>

        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Tech-Marketer" />
        <meta name="og:description" content="Comment allier Marketing et Tech pour améliorer son efficacité."/>
        <meta name="og:url" content={window.location.href}/>
        <meta name="og:image" content="http://localhost:3001/images/homepage.jpg" />
      </Helmet>

      {this.state.posts.map(post=>

        <Article
          style={{width:'80%'}}
          key={post.id}
          cardTitle={post.title}
          cardText={post.description}
          linkTitle={post.path}
        />

         )}

    </div>
    );
  }

}

export default Blog;
