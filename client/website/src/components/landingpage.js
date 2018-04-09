import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

import Article from "./article.js";
// import GoogleTagManager from './google-tag-manager';
import "../App.css";

import avatar from "../img/thinking.jpeg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { postsHome: [] };
  }

  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .then(postsHome => this.setState({ postsHome }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const maxCardTextLength = 250;
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jonathan Rosado - Tech-Marketer</title>

          <meta
            name="description"
            content="Jonathan Rosado - Marketer spécialisé dans l'aspect technologique du Marketing. J'allie la programmation et les statistiques au Marketing pour résoudre des problèmes avec des solutions innovantes."
          />

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jonathan Rosado - Tech-Marketer" />
          <meta
            property="og:description"
            content="Jonathan Rosado - Marketer spécialisé dans l'aspect technologique du Marketing. J'allie la programmation et les statistiques au Marketing pour résoudre des problèmes avec des solutions innovantes."
          />
          <meta property="og:url" content={window.location.href} />
          <meta
            property="og:image"
            content="https://jonathanrosado.fr/images/homepage.jpg"
          />
        </Helmet>
        {/* <GoogleTagManager gtmId='GTM-WQ35TQS'> </GoogleTagManager> */}
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img img-circle"
              src={avatar}
              alt="bitmoji jonathan"
            />
            <div className="banner-text">
              <h1>Tech-Marketer</h1>
              <hr />
              <p>SEM - Programming - Data Science - Analytics</p>
            </div>
          </Cell>
          <Cell col={12}>
            <h3>Articles récents...</h3>
            <br />
            <div className="projects-grid">
              {this.state.postsHome.slice(-3).map(post => (
                <Card
                  key={post.id}
                  shadow={5}
                  style={{
                    margin: "auto",
                    marginBottom: "20px",
                    minHeight: "280px"
                  }}
                  className="landing-cards"
                >
                  <a
                    href={`/blog/${post.path}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardTitle
                      style={{
                        color: "black",
                        fontSize: "1.4em",
                        lineHeight: post.title.length > 70 ? "0.9em" : "1em"
                      }}
                    >
                      <b>{post.title}</b>
                    </CardTitle>
                    <CardText style={{ fontSize: "1em" }}>
                      {post.description.length > maxCardTextLength
                        ? post.description.substr(0, 247) + "..."
                        : post.description}
                    </CardText>
                  </a>
                </Card>
              ))}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
