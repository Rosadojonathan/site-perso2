import React from 'react';
import asyncComponent from './AsyncComponent';

import {Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './landingpage';
// import Contact from './contact';
// import Projects from './projects';
import Blog from './blog';
// import Resume from './resume';
import Login from './login';
// import Admin from './admin';
import ArticlePost from './articlepost';
import ArticlePostEditor from './TextEditor/ArticlePostEditor';
import { connect } from 'react-redux';
const AsyncContact = asyncComponent(() => import('./contact'));
const AsyncResume = asyncComponent(() => import('./resume'));
const AsyncAdmin = asyncComponent(() => import('./admin'));
const AsyncProjects = asyncComponent(() => import('./projects'));




const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

const ConnectedPrivateRoute = ({component:Component, ...rest}) =>{
  console.log(rest)
  const { authenticated } = rest.authenticated;
  return (
    <Route {...rest} render={(props) => (
      rest.authenticated === true
      ? <Component {...rest} {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}}
    /> )} />
    )
  }
const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);

// Gros Hack...
const MyLoginForm = (props) => {
  return (
    <Login
      {...props}/>
  );
}



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/contact" component={AsyncContact}/>
    <Route path="/projets" component={AsyncProjects}/>
    <Route path="/cv" component={AsyncResume}/>
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/:article" component={ArticlePost} />
    <Route path="/login" component={MyLoginForm} />
    <PrivateRoute path="/admin/:article" component={ArticlePostEditor} />
    <PrivateRoute path="/admin" component={AsyncAdmin} />


  </Switch>
)

export default Main;
