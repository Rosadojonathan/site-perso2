import React, { Component } from 'react'




class Logo extends Component {

    render() {
      return (
        <img
            src={this.props.logo}
            style={{ height: "80px", width: "auto !important", marginRight:"15px" }}
            alt={this.props.logoName}
        />
      );
    }
  
  }
  
  export default Logo;