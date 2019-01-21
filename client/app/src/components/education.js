
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Education extends Component {

  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}> <b> {this.props.schoolName}</b></h4>
          <p><i>{this.props.schoolDegree}</i></p>
          <p>{this.props.schoolDescription}</p>
        </Cell>

      </Grid>

    );
  }

}

export default Education;
