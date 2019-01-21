import React, { Component } from 'react'
import { Tabs, Tab,Grid,Cell,Card,CardTitle,Button,CardMenu,IconButton, CardText, CardActions} from 'react-mdl';
import '../App.css'

export default class ProjectCard extends Component {
  render() {
    return (
    //   <Cell col={4}>
        <Card className="project-card" >
          <CardTitle className="project-image" style={{color:'#fff',height:'176px',background:`url(${this.props.background})`}}></CardTitle>
          <CardTitle id="card-title" style={{color:'black', fontWeight:'bold', fontSize:"21px"}}>{this.props.cardTitle}</CardTitle>
          <CardText style={{marginBottom:'5px'}}>{this.props.cardText}</CardText>
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
        // </Cell> 
    
    )
  }
}
