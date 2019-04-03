import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Main from './containers/Main';
import { Link } from 'react-router-dom';
import './App.css';
import { loggedin, expiredLoggedin } from './redux/actions/actions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import 'react-chat-widget/lib/styles.css';


class App extends Component {

  componentDidMount(){
      const {token} = this.props;
      async function authenticate(token) {
        const res = await axios.post('/api/auth',{
          token
        })
        if (res.data.success === true){
          return true
        } else if(res.data.tokenExpired === true) {
          return "expired token"
        }
        else {
          return false
        }
      }
    token && authenticate(token).then((res) => {
      if (res === true){
        this.props.loggedin()
      } else if( res === "expired token") {
        this.props.expiredLoggedin()

      }
    })
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
      
    </MuiThemeProvider>
  </div>
    );
  }
}

const mapStateToProps = state => {
  return { token: state.token };
};
const mapDispatchToProps = dispatch => ({
  loggedin: () => dispatch(loggedin()),
  expiredLoggedin: () => dispatch(expiredLoggedin())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
