import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Main from './components/main';

import { Link } from 'react-router-dom';
import './App.css';




class App extends Component {


  render() {
    return (
      <div className="demo-big-content">
      <MuiThemeProvider>
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'white'}} to="/">Rosado Jonathan - Tech Marketer</Link>} scroll>
              <Navigation id="navigation">
{/* key='1' onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this,this.key)} style={{transform: this.state.hovered && this.state.key == this.props.key ? 'skew(-15deg, 0deg)' : 'skew(0)'}} */}
                  <Link style={{color: window.location.pathname.includes('cv') ? '#FFF' :  '#eeeaea'}} to="/cv">CV</Link>
                  <Link style={{color: window.location.pathname.includes('blog') ? '#FFF' :  '#eeeaea'}} to="/blog">Blog</Link>
                  <Link style={{color: window.location.pathname.includes('projets') ? '#FFF' :  '#eeeaea'}} to="/projets">Projets</Link>
                  <Link style={{color: window.location.pathname.includes('contact') ? '#FFF' :  '#eeeaea'}} to="/contact">Contact</Link>
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
    </MuiThemeProvider>
  </div>
    );
  }
}

export default App;
