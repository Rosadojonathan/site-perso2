import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Main from './components/main';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { Link } from 'react-router-dom';
import './App.css';
import jonathanLogo from './img/jonathan-rosado-image-cv-small.jpg'

import 'react-chat-widget/lib/styles.css';


class App extends Component {
  componentDidMount() {
    addResponseMessage("Visiteur, mon chatbot te salue !");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API

    const response = "super !"
    setTimeout(addResponseMessage(response), 3000);
  }


  render() {
    return (
      <div className="demo-big-content">
      <MuiThemeProvider>
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'white'}} to="/">Rosado Jonathan - Tech Marketer</Link>} scroll>
              <Navigation id="navigation">
{/* key='1' onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this,this.key)} style={{transform: this.state.hovered && this.state.key == this.props.key ? 'skew(-15deg, 0deg)' : 'skew(0)'}} */}
                  <Link style={{color: window.location.pathname.includes('cv') ? '#FFF' :  '#eeeaea', fontWeight: window.location.pathname.includes('cv') ? 'bold' : '500'}} to="/cv">CV</Link>
                  <Link style={{color: window.location.pathname.includes('blog') ? '#FFF' :  '#eeeaea', fontWeight: window.location.pathname.includes('blog') ? 'bold' : '500'}} to="/blog">Blog</Link>
                  <Link style={{color: window.location.pathname.includes('projets') ? '#FFF' :  '#eeeaea', fontWeight: window.location.pathname.includes('projets') ? 'bold' : '500'}} to="/projets">Projets</Link>
                  <Link style={{color: window.location.pathname.includes('contact') ? '#FFF' :  '#eeeaea', fontWeight: window.location.pathname.includes('contact') ? 'bold' : '500'}} to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to='/'>Tech-Marketer </Link>}>
              <Navigation>

                <Link to="/cv">CV</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
            <Main/>
          </Content>
      </Layout>
      <Widget 
      handleNewUserMessage={this.handleNewUserMessage}
      profileAvatar={jonathanLogo}
      title=""
      subtitle="Chatbot de Jonathan"
      senderPlaceHolder="Écrivez un message"
      badge="1"

      />
    </MuiThemeProvider>
  </div>
    );
  }
}

export default App;
