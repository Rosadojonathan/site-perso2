import React, { Component } from "react";
import { Grid, Cell, Textfield, Card } from "react-mdl";
import TextEditor from './TextEditor/TextEditor';
import FileSaver from './TextEditor/FileSaver';



class Admin extends Component {

  render() {
    return (

      <div>
        <Grid> 
          <Cell col={2} style={{backgroundColor:"lightgrey",height:"900px"}}></Cell>
          <Cell col={7}>
              <TextEditor />
          </Cell>
          <Cell col={3} style={{backgroundColor:"#FFFAF0",height:"900px"}}>
              <FileSaver />
          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Admin;
