import React, { Component } from 'react'

class FileSaver extends Component {

  render() {
    return (
      <div style={{textAlign:'right', marginRight:'20px'}}>
          <p style={{marginTop:"30px"}}> <b>Filename: </b> <input onChange={(e) => this.props.onChangeFilename(e.target.value)} style={{width:"180px",}} type="text" name='filename'/></p>
          <p style={{marginTop:"30px"}}> <b>Title: </b> <input onChange={(e) => this.props.onChangeTitle(e.target.value)} style={{width:"180px",}} type="text" name='title'/></p>
          <p style={{marginTop:"20px"}}> <b>Path: </b> <input onChange={(e) => this.props.onChangePath(e.target.value)} style={{width:"180px",}} type="text" name='path'/></p>
          <p style={{marginTop:"20px"}}> <b>Image Link: </b> <input onChange={(e) => this.props.onChangeImageLink(e.target.value)} style={{width:"180px",}} type="text" name='image link'/></p>
          <p style={{marginTop:"20px"}}> <b>Description: </b> <textarea onChange={(e) => this.props.onChangeDescription(e.target.value)} name="description" cols="40" rows="5"></textarea></p>        
      </div>
    )
  }
}

export default FileSaver
