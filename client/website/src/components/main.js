import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Blog from './blog';
import Resume from './resume';
import ArticlePost from './articlepost';




const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/apropos" component={AboutMe}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/projets" component={Projects}/>
    <Route path="/cv" component={Resume}/>
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/:article" component={ArticlePost} />


  </Switch>
)

export default Main;
