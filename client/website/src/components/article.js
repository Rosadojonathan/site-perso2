import React, { Component } from 'react';


import {Cell, Grid, Card, CardTitle,CardText, Link,TextField} from 'react-mdl';

import '../css/articlecss.css';





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
        <a href={`/blog/${this.props.linkTitle}`} style={{textDecoration:'none'}}>
        <Grid  className="blog-grid-article" onMouseEnter={this.onHover} onMouseLeave={this.onHover} style={{marginBottom:"20px"}}>
          <Cell col={8} className="article-blog">
            <Card  style={{width:'100%', height:"320px", margin:'auto'}}>
                <CardTitle> <h2 style={{fontSize:'1.4em',lineHeight:'0.9em',fontWeight:'bold',color: this.state.coloredArticle ? '#082008' : ''}}>{this.props.cardTitle}</h2></CardTitle>
                <CardText style={{color: this.state.coloredArticle ? 'black' : ''}} > { this.props.cardText.length > 350 ? this.props.cardText.substr(0,347) + '...' : this.props.cardText}</CardText>
                <CardTitle> <h6 style={{fontSize:'0.75em',lineHeight:'0.9em',color: this.state.coloredArticle ? 'black' : '', fontWeight: this.state.coloredArticle ? 'bold' : ''}}> Écrit le : {this.props.date} </h6></CardTitle>
            </Card>

          </Cell>
          <Cell col={4}>
            <Card >
             <CardTitle  style={{color:'black', background: `url(${this.props.image}) center`,height:'320px', width:"100%",padding:"20px",backgroundRepeat:"no-repeat",backgroundSize:"contain",marginRight:"auto",marginLeft:"auto"}} />
            </Card>
            </Cell>
        </Grid>   
            
          
          



          {/* <div style={{backgroundColor:"white",padding:"20px",marginTop:"20px"}}>
              <h2>{this.props.cardTitle}</h2>
              <div class="image" style={{background: `url(${this.props.image})`, height:'200px', width:"100%",padding:"20px",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></div>
              <p>{ this.props.cardText.length > 350 ? this.props.cardText.substr(0,347) + '...' : this.props.cardText}</p>
          </div> */}
        </a>
    );
  }

}

export default Article;
