import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Cell } from 'react-mdl';

import '../css/articlecss.css';

class ArticlePost extends Component {
  constructor(props){
    super(props)

    this.state = {
      article: {},
      loaded:false
    }

  }



componentDidMount(){

 let  handle = this.props.match.params.article;

  console.log(handle);

  fetch(`/articles/${handle}`)
  .then(res => res.json())
  .then(article => this.setState({article,loaded:true}))
  .catch(function(error){

    console.log(error);
  });

}




  render() {
    console.log(this.state.article);
    if (this.state.loaded){
      return (

        <div style={{width:'80%',margin:'auto'}}>

          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.article[0].title} - Tech-Marketer</title>

            <meta name="description" content={this.state.article[0].description}/>

            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={this.state.article[0].title} />
            <meta name="og:description" content={this.state.article[0].description}/>
            <meta name="og:url" content={window.location.href}/>
            <meta name="og:image" content="http://188.166.107.209/images/homepage.jpg" />

            <meta property="article:published_time" content="2018-03-21T12:00:49+01:00" />
          </Helmet>

          <Grid className="article-post">
            <Cell col={9}>
              <h1 style={{fontSize:'1.8em',fontWeight:'bold'}}>{this.state.article[0].title}</h1>

              <p dangerouslySetInnerHTML={{__html: this.state.article[0].content}} />
            </Cell>

          </Grid>
        </div>
  )  }
    else{
      return (
        <div style={{textAlign:'center'}}>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />



        </div>
      )
    }

  }

}

export default ArticlePost;
