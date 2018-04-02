import React, { Component } from 'react';
import '../App.css';

class Chatbot extends Component {
 //var widget = '<div style="width: 100%; height:600px; position: relative; overflow: hidden;"><iframe width="100%" height="100%" frameborder="0" src=""></iframe></div>'
  render() {
    return (
      <div >
        <iframe id="landbotIoIframe" style={{width:'100%',height:'700px'}}  src="https://landbot.io/u/H-33762-YWNLL9YTF1WXRRLI/index.html" frameborder="0"></iframe>
      </div>
    );
  }

}

export default Chatbot;
