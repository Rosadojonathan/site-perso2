import React, { Component } from 'react';
import {Card, CardTitle, CardText } from 'react-mdl';

class Comment extends Component {

  render() {
    return (
      <div style={{padding:'2em 2em'}}>
        <Card shadow={5}  >
          <CardTitle style={{color:'black',fontWeight:'bold',fontSize:'16px'}} > {this.props.name}</CardTitle>
          <CardText style={{color:'black',fontSize:'1em'}}>

            <p>{this.props.comment}</p>
            <p style={{fontSize:'8px'}}>{this.props.date ? 'Écrit le ' + this.props.date : ''}</p>
          </CardText>
        </Card>

      </div>
    );
  }

}

export default Comment;
