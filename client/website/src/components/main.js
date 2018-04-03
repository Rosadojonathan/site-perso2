import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Blog from './blog';
import Resume from './resume';
import Login from './login';
import Admin from './admin';
import ArticlePost from './articlepost';


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

const PrivateRoute = ({component:Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect  to='/login' />
  )} />
)

// Gros Hack...
const MyLoginForm = (props) => {
  return (
    <Login
      fakeAuth={fakeAuth} {...props}/>
  );
}



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/apropos" component={AboutMe}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/projets" component={Projects}/>
    <Route path="/cv" component={Resume}/>
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/:article" component={ArticlePost} />
    <Route path="/login" component={MyLoginForm} />
    <PrivateRoute path="/admin" component={Admin} />


  </Switch>
)

export default Main;
