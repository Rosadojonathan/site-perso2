import React, { Component } from 'react'

class FileSaver extends Component {

  render() {
    return (
      <div style={{textAlign:'right', marginRight:'20px'}}>
          <p style={{marginTop:"30px"}}> <b>Title: </b> <input onChange={(e) => this.props.onChangeTitle(e.target.value)} style={{width:"180px",}} type="text" name='title' defaultValue={this.props.title}/></p>
          <p style={{marginTop:"20px"}}> <b>Image Link: </b> <input onChange={(e) => this.props.onChangeImageLink(e.target.value)} style={{width:"180px",}} type="text" name='image link' defaultValue={this.props.image_link}/></p>
          <p style={{marginTop:"20px"}} > <b>Description: </b> <textarea contentEditable="true" onChange={(e) => this.props.onChangeDescription(e.target.value)} name="description" style={{width:"80%",height:"220px",textAlign:"left",border:"ridge"}} value={this.props.description} /></p>        
      </div>
    )
  }
}

export default FileSaver
