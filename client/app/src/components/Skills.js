import React, { Component } from 'react';
import { Grid, Cell,ProgressBar } from 'react-mdl';

export class Skills extends Component {

  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill}  </div><ProgressBar style={{margin:'auto',width:'55%',left:'50px',bottom:'10px'}} progress={this.props.progress} />
        </Cell>
      </Grid>
    );
  }

}

export class AlternateSkills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
        </Cell>
        <Cell col={8}>
        <ul style={{ listStyle:'none', fontSize: '1.4rem', fontWeight:"bold", lineHeight:'2.5rem'}}>
          {this.props.skills.map(skill => <li key={skill}> {skill}</li>)}
          </ul>
        </Cell> 
      </Grid>
    )
  }
}


