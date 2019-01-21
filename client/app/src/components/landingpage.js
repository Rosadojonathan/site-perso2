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

import "../App.css";

import avatar from "../img/thinking.jpeg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { postsHome: [] };
  }

  componentDidMount() {
    fetch("/api/posts")
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
            <div className="parallax" style={{backgroundImage:`url(${avatar})`}}>

            </div>
            {/* <img
              className="avatar-img img-circle"
              src={avatar}
              alt="bitmoji jonathan"
            /> */}
            
          </Cell>
          <Cell col={12} className="intro-paragraph">
          <div className="banner-text" style={{width:'80%'}}>
              <h1>Tech-Marketer</h1>
              <hr />
              <p className="banner-topics">SEM - Programming - Data Science - Analytics</p>
            </div>

            <br/>
            <h2>Qui suis-je ?</h2>
            
            <h5>Jonathan Rosado - Marketer spécialisé en programmation et data</h5>
            <br/>
            <br/>
            <div className="intro" >
                <p>Grand convaincu des bénéfices de l'approche <b>autodidacte</b>, je défie mes croyances limitantes pour nourrir ma curiosité intellectuelle.</p>

                 <p>D’abord <b>passionné de langues étrangères</b>, j’ai étudié plus d’une dizaine de langues européennes et non-européennes au cours de mon adolescence ce qui m’a permis de <b>comprendre les mécanismes de l’apprentissage et de la gestion de la motivation</b> - l'enseignement le plus utile dont j'ai fait l'expérience à mes yeux. </p>

                 <p> Par la suite, j’ai découvert le Marketing qui m’a tout de suite captivé par l’étendue des domaines qu’il recouvre, de la psychologie au design en passant aussi par les statistiques et le web. </p>

                 <p>Lors de mon expérience en marketing en startup j’ai pu acquérir des compétences en <b>acquisition de trafic, optimisation du taux de conversions, tracking et référencement.</b> J'ai appris à coder en <b>Python et JavaScript </b>pour créer des scripts d'automatisation de tâches chronophages, de scrapping de données et de création de sites internet en <b> React & Node.js.</b> (J'ai notamment réalisé mon site personnel en ces deux librairies)  </p>

                 <p> Finalement, je me suis découvert grâce à mon activité en marketing une nouvelle passion pour <b>l'analyse et l'exploitation de données par les outils statistiques ou de Machine Learning</b> que je trouve absolument fascinants.  </p>

                 <p>C'est pourquoi j'étudie en autodidacte depuis un an et demi les <b>statistiques</b> (paramétriques, non-paramétriques et bayésiennes), les probabilités, l'algèbre linéaire et le calcul infinitésimal pour comprendre les subtilités et les limites des outils que j'ai appris à utiliser en R et en Python. 
                  Mon mémoire de Master traite notamment de l'implémentation de techniques de <b>Data Mining et d'algorithmes prédictifs supervisés</b> dans le cadre de la publicité sur les réseaux sociaux.</p>
              </div>

          </Cell>


          <Cell col={12}>
            <br/>
            <h3>Articles récents...</h3>
            <br />
            <div className="projects-grid">
              {this.state.postsHome.slice(0, 3).map(post => (
                <Card
                  key={post.id}
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
