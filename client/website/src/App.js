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
              <Navigation>
{/* key='1' onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this,this.key)} style={{transform: this.state.hovered && this.state.key == this.props.key ? 'skew(-15deg, 0deg)' : 'skew(0)'}} */}
                  <Link to="/cv">CV</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/projets">Projets</Link>
                  <Link to="/contact">Contact</Link>
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
