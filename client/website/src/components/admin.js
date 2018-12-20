import React, { Component } from "react";
import { Grid, Cell, Tabs, Tab, Textfield, Card } from "react-mdl";
import TextEditor from './TextEditor/TextEditor';
import FileSaver from './TextEditor/FileSaver';
import '../App.css';
import ArticleDisplayer from './TextEditor/ArticleDisplayer';

class Admin extends Component {
  state = {
      title:"",
      path:"",
      image_link:"",
      description:"",
      filename:"",
      activeTab:0
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

  toggleCategories(){
    if (this.state.activeTab === 0){
      return (
        <React.Fragment>
          <Cell col={7}>
              <TextEditor
                title={this.state.title}
                path={this.state.path}
                image_link={this.state.image_link}
                description={this.state.description}
                filename={this.state.filename}
              />
          </Cell>
          <Cell col={3} style={{backgroundColor:"lavender",height:"500vh"}}>
              <FileSaver 
                onChangeDescription={this.onChangeDescription.bind(this)}
                onChangeTitle={this.onChangeTitle.bind(this)}
                onChangePath={this.onChangePath.bind(this)}
                onChangeImageLink={this.onChangeImageLink.bind(this)}
                onChangeFilename={this.onChangeFilename.bind(this)}
              />
          </Cell>
          </React.Fragment>
      )
    } else if (this.state.activeTab === 1){
      return (
        <React.Fragment>
          <Cell col={10}>
          <ArticleDisplayer />
          </Cell>
          
        </React.Fragment>
      )
    }
  }
  render() {
    return (

      <div>
        <Grid> 
          <Cell col={2} style={{backgroundColor:"lavender",height:"500vh"}}>
            <Tabs style={{padding:'0px 10px', display:"block !important", width:"95%"}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
              <Tab style={{width:'100%'}}><p>Write Article</p></Tab>
              <Tab style={{width:'100%'}}> <p>Edit Article</p></Tab>
            </Tabs> 
          </Cell>
          {this.toggleCategories()}
        </Grid>

      </div>
    );
  }
}

export default Admin;
