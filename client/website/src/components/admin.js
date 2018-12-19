import React, { Component } from "react";
import { Grid, Cell, Textfield, Card } from "react-mdl";
import TextEditor from './TextEditor/TextEditor';
import FileSaver from './TextEditor/FileSaver';


class Admin extends Component {
  state = {
      title:"",
      path:"",
      image_link:"",
      description:"",
      filename:""
    }
  
  onChangeTitle(text){
    this.setState({
      title:text
    })
  }
  onChangePath(text){
    this.setState({
      path:text
    })
  }
  onChangeImageLink(text){
    this.setState({
      image_link:text
    })
  }
  onChangeDescription(text){
    this.setState({
      description:text
    })
  }
  onChangeFilename(text){
    this.setState({
      filename:text
    })
  }
  render() {
    return (

      <div>
        <Grid> 
          <Cell col={2} style={{backgroundColor:"lavender",height:"900px"}}></Cell>
          <Cell col={7}>
              <TextEditor
                title={this.state.title}
                path={this.state.path}
                image_link={this.state.image_link}
                description={this.state.description}
                filename={this.state.filename}
              />
          </Cell>
          <Cell col={3} style={{backgroundColor:"lavender",height:"900px"}}>
              <FileSaver 
                onChangeDescription={this.onChangeDescription.bind(this)}
                onChangeTitle={this.onChangeTitle.bind(this)}
                onChangePath={this.onChangePath.bind(this)}
                onChangeImageLink={this.onChangeImageLink.bind(this)}
                onChangeFilename={this.onChangeFilename.bind(this)}
              />
          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Admin;
