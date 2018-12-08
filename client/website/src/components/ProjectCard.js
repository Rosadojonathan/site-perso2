import React, { Component } from 'react'
import { Tabs, Tab,Grid,Cell,Card,CardTitle,Button,CardMenu,IconButton, CardText, CardActions} from 'react-mdl';
import '../App.css'

export default class ProjectCard extends Component {
  render() {
    return (
      
        <Card className="project-card" style={{minWidth:'450',margin:'auto',height:'420px'}}>
          <CardTitle style={{color:'#fff',height:'176px',background:`url(${this.props.background}) center / cover`}}></CardTitle>
          <CardTitle style={{color:'black', fontWeight:'bold'}}>{this.props.cardTitle}</CardTitle>
          <CardText>{this.props.cardText}</CardText>
           <CardActions border>
           {this.props.githubLink ? 
                <Button colored style={{textAlign:'center'}}><a style={{ textDecoration:'none',color:'#000080'}} href={this.props.githubLink}>GitHub</a></Button> 
           : 
                 <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>

            }
             

           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share"/>
           </CardMenu>
        </Card>
        
    
    )
  }
}
