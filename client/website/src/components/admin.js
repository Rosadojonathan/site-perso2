import React, { Component } from "react";
import { Textfield } from "react-mdl";

class Admin extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <div>
        <div>What's up boss ?</div>
        <Textfield
          name="text"
          label="Input text..."
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          pattern="\S+.*"
          error="Entrez du text quand même..."
          floatingLabel
          style={{ width: "400px" }}
        />
        <div>
          This is a div and the text written in the input is: {this.state.text}
        </div>
      </div>
    );
  }
}

export default Admin;
