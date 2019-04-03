import React from 'react';
import asyncComponent from './AsyncComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './LandingPage';
import Blog from './Blog';
import Login from './Login';
import ArticlePost from './ArticlePost';
import ArticlePostEditor from './TextEditor/ArticlePostEditor';
import { connect } from 'react-redux';
const AsyncContact = asyncComponent(() => import('./Contact'));
const AsyncResume = asyncComponent(() => import('./Resume'));
const AsyncAdmin = asyncComponent(() => import('./Admin'));
const AsyncProjects = asyncComponent(() => import('./Projects'));




const mapStateToProps = state => {
  return { token: state.token, loggedin:state.loggedin };
};

const ConnectedPrivateRoute =   ({component:Component, ...rest}) =>{
  return (
    <Route {...rest} render={(props,res) => 
      ( 
        rest.loggedin === true
      ? <Component {...rest} {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
     )} />
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
