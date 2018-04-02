import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import { Grid, Cell, Card, CardTitle, CardMenu,IconButton, CardText, CardActions,Link,Textfield} from 'react-mdl';

import Article from './article.js';
import '../App.css'

class Blog extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[],
      search:''
    }
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



    if (this.state.search){
      return(

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
            <meta name="og:image" content="https://jonathanrosado.fr/images/homepage.jpg" />
          </Helmet>
          <Textfield
                  onChange={() => {}}
                  name="article"
                  label="Recherchez un article..."
                  value={this.state.search}

                  onChange={e => this.setState({search: e.target.value})}

                  floatingLabel
                  style={{width: '95%',marginTop:"30px",marginLeft:'20px'}}
              />

          {this.state.posts.filter( (post) => {

            const results = [];
            const elementsToSearch = this.state.search.toLowerCase().split(' ');
            elementsToSearch.forEach( (e) => {
                if (post.title.toLowerCase().includes(e) || post.description.toLowerCase().includes(e))
                {results.push(e)}
              })
            if (results.length === elementsToSearch.length)
               {return true}
               
             })
            .map(post=>

            <Article
              style={{width:'80%'}}
              key={post.id}
              cardTitle={post.title}
              cardText={post.description}
              linkTitle={post.path}
            />

             )}

        </div>

      )
    }


    if(!this.state.search){
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
        <meta name="og:image" content="https://jonathanrosado.fr/images/homepage.jpg" />
      </Helmet>
      <Textfield
              name="article"
              label="Recherchez un article..."
              value={this.state.search}

              onChange={e => this.setState({search: e.target.value})}

              floatingLabel
              style={{width: '95%',marginTop:"30px",marginLeft:'20px'}}
          />

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

}

export default Blog;
