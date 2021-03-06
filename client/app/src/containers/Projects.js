import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Tabs, Tab,Grid,Cell,Card,CardTitle,Button,CardMenu,IconButton, CardText, CardActions} from 'react-mdl';
import ProjectCard from '../components/ProjectCard';

import machineLearningIcon from '../img/machinelearningicon.svg';
import facebookIcon from '../img/facebookicon.svg';
import slackIcon from '../img/slackicon.png';
import reactIcon from '../img/reacticon.png';
import reactNativeicon from '../img/react-native-logo.png';
import electronIcon from '../img/electron-logo-3.png';
import chromeIcon from '../img/chrome-logo.png';
import vueGraphQL from '../img/vue-graphql.png'
// import GoogleTagManager from './google-tag-manager';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab:0};
  }


  toggleCategories(){
    if (this.state.activeTab === 0){
      return (
      <div className="projects-grid">
        <ProjectCard 
          background={reactIcon}
          cardTitle="Création d'un site CMS-like en React" 
          cardText="J'ai développé un site internet avec les technologies React, Express, Redux, Postgres, Docker et Nginx. Ce projet me permet d'expérimenter avec le SEO des frameworks JS ainsi que de m'exercer au déploiement de plans de tracking."
          githubLink="https://github.com/Rosadojonathan/site-perso2"
        />
        <ProjectCard 
          background={reactNativeicon}
          cardTitle="Création d'une app mobile de flashcards en React-Native" 
          cardText="J'ai réalisé une application mobile IOS/Android d'apprentissage par flashcards inspiré par la célèbre application Anki en utilisant les technologies React-Native, Redux et PouchDB. Elle peut ainsi se synchroniser avec son app équivalent Electron."
          githubLink="https://github.com/Rosadojonathan/not-anki"
        />
        <ProjectCard 
          background={electronIcon}
          cardTitle="Création d'une app Electron de flashcards avec React" 
          cardText="J'ai créé une application Electron de flashcards en utilisant les technologies React, Redux et PouchDB qui se synchronise avec son app équivalente React-Native."
          githubLink="https://github.com/Rosadojonathan/not-anki-electron"
        />
        <ProjectCard 
          background={chromeIcon}
          cardTitle="Création d'une extension Chrome de flashcards avec React" 
          cardText="J'ai ajouté une extension Chrome à ma série d'applications de flashcards qui se synchronisent entre elles et qui permet de rajouter des cartes directement depuis le navigateur. Stack: React / Redux et PouchDB."
          githubLink="https://github.com/Rosadojonathan/not-anki-chrome"
        />
        <ProjectCard 
          background={vueGraphQL}
          cardTitle="Création d'un chat avec Vue + GraphQL + Firebase" 
          cardText="Découverte de VueJS et GraphQL en créant une petite application de chat en temps réel qui utilise Firestore comme DB."
          githubLink="https://github.com/Rosadojonathan/vue-graphql-firebase-chatapp"
        />





      </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        
          <ProjectCard 
            background={machineLearningIcon}
            cardTitle="Projet Machine Learning: Prédiction de pertinence d'un produit sur les canaux publicitaires"
            cardText="Ce projet m'a permis de mettre en application mes connaissances en Statistiques et Machine Learning appliqué au Marketing grâce à Python."
          />
          <ProjectCard 
            background="/images/analyse-de-sentiments.jpg"
            cardTitle="Projet Data Viz: Graph d'analyse de sentiments de Facebook Ads"
            cardText="J'ai développé une petite interface en Dash pour visualiser la polarité des commentaires reçus sur des Facebook Ads grâce à la librairie VADER."
            githubLink="https://github.com/Rosadojonathan/facebook-ads-sentiment-grapher"
          />
          <ProjectCard 
            background="https://raw.githubusercontent.com/Rosadojonathan/rasa-core-bot/master/chatbot.jpg"
            cardTitle="Projet NLU: Chatbot RASA Stack"
            cardText="J'ai créé un petit chatbot disponible sur ma page de contact en utilisant la Stack RASA NLU / RASA Core. La librairie est open source, l'on peut donc faire tourner le chatbot sur son propre serveur."
            githubLink="https://github.com/Rosadojonathan/rasa-core-bot"
          />
          <ProjectCard 
            background="/images/markov-chains-shiny.jpg"
            cardTitle="App Shiny: Attribution Markov Chains vs Modèles Heuristiques"
            cardText="J'ai créé une petite app Shiny en R qui permet d'accéder à une interface qui graphe une comparaison de l'attribution des conversions selon un modèle par chaînes de Markov ou par modèles heuristiques classiques. "
            githubLink="https://github.com/Rosadojonathan/markov-chains-attribution-shiny"
          />
                    
        </div>

      )
    }
    else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <ProjectCard 
            background={facebookIcon}
            cardTitle="Automatisation de la création de Facebook Ads avec Python"
            cardText="Comment semi-automatiser la création de Facebook Ads grâce au SDK Python de l'API Marketing de Facebook en quelques heures."
            githubLink="https://github.com/Rosadojonathan/facebook-ads-automation/blob/master/facebook-ads-automation.py"
          />
          <ProjectCard 
            background={facebookIcon}
            cardTitle="Automatisation de la sponsorisation de posts Facebook"
            cardText="Comment semi-automatiser la sponsorisation de posts Facebook d'une page à nouveau grâce au SDK Python de l'API Marketing de Facebook."
          />
        </div>
      )
    }
    else if (this.state.activeTab === 3){
      return (
        <div className="projects-grid">

          <ProjectCard 
            background={slackIcon}
            cardTitle="Slackbot d'alerte CPA Facebook Ads"
            cardText="Ce script envoie automatiquement des alertes sur un channel Slack lorsque les coûts d'acquisition publicitaires d'une campagne Facebook dépassent un certain montant."
          />

          <ProjectCard 
            background={slackIcon}
            cardTitle="Slackbot d'alerte CPA Adwords"
            cardText="Ce script envoie automatiquement des alertes sur un channel Slack lorsque les coûts d'acquisition publicitaires d'une campagne AdWords dépassent un certain montant."
          />        
          <ProjectCard 
            background={slackIcon}
            cardTitle="Slackbot d'alerte absence de stocks sur fiche produit"
            cardText="Ce script itère toutes les heures sur les campagnes AdWords actives d'un compte pour lancer un crawler de type headless browser pour exécuter le JavaScript de la page et vérifier que le produit affiche bien des stocks dans la variante affichée par défaut."
          />   
          </div>

      )
    }
  }


  render() {
    return (
      <div className="category-tabs">

        <Helmet>
          <meta charSet="utf-8" />
          <title>Projets Tech-Market - Tech-Marketer</title>

          <meta name="description" content="Jonathan Rosado - Marketer spécialisé dans l'aspect technologique du Marketing. J'allie la programmation et les statistiques au Marketing pour résoudre des problèmes avec des solutions innovantes."/>

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Projets Tech-Market - Tech-Marketer" />
          <meta property="og:description" content="Jonathan Rosado - Marketer spécialisé dans l'aspect technologique du Marketing. J'allie la programmation et les statistiques au Marketing pour résoudre des problèmes avec des solutions innovantes."/>
          <meta property="og:url" content={window.location.href}/>
          <meta property="og:image" content="https://jonathanrosado.fr/images/homepage.jpg" />
        </Helmet>

        <Tabs style={{padding:'0px 10px',width:"100%"}}activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab style={{width:'25%'}}><p>Apps</p></Tab>
          <Tab style={{width:'25%'}}> <p>Data Science/Viz</p></Tab>
          <Tab style={{width:'25%'}}><p>Ads Automation</p></Tab>
          <Tab style={{width:'25%'}}><p>Slackbots</p></Tab>

        </Tabs>


          <Grid col={12}>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }

}

export default Projects;
