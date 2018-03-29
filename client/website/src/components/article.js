import React, { Component } from 'react';


import {Cell, Card, CardTitle,CardText, Link} from 'react-mdl';

import '../css/article.css';





class Article extends Component {
  constructor(props){
    super(props);
    this.state = { coloredArticle: false }
    this.onHover = this.onHover.bind(this)
  }

  onHover(){
    if (!this.state.coloredArticle){
      this.setState({coloredArticle: true})
    }
    else{
      this.setState({coloredArticle: false})
    }
  }

  render() {


    return (
      <Cell col={9} style={{padding:'8px'}}>
        {/* <Link to={`/blog/${this.props.linkTitle}`} > */}
        <a href={`/blog/${this.props.linkTitle}`} style={{textDecoration:'none'}}>
          <Card shadow={5} onMouseEnter={this.onHover} onMouseLeave={this.onHover} style={{width:'95%',margin:'auto',maxHeight:'280px',backgroundColor: this.state.coloredArticle ? '#D7F8E3' : ''}}>

              <CardTitle id="article-title" style={{color:'black',maxHeight:'90px',marginTop:'15px'}}><h2 style={{fontSize:'1.6em',lineHeight:'0.9em',fontWeight:'bold',color: this.state.coloredArticle ? '#082008' : ''}}>{this.props.cardTitle}</h2></CardTitle>
              <CardText style={{maxHeight:'150px',color: this.state.coloredArticle ? 'black' : ''}} > { this.props.cardText.length > 350 ? this.props.cardText.substr(0,347) + '...' : this.props.cardText}</CardText>

          </Card>
        </a>
      {/* </Link> */}
      </Cell>
    );
  }

}

export default Article;
