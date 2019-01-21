import React, { Component } from 'react';
import { Grid, Cell,ProgressBar } from 'react-mdl';

class Skills extends Component {

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

export default Skills;
