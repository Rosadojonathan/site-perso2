import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Tabs, Tab,Grid,Cell,Card,CardTitle,Button,CardMenu,IconButton, CardText, CardActions} from 'react-mdl';

import machineLearningIcon from '../img/machinelearningicon.svg';
import facebookIcon from '../img/facebookicon.svg';
import slackIcon from '../img/slackicon.png';
import reactIcon from '../img/reacticon.png';

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



        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height:'176px',background:`url(${reactIcon}) center / cover`}}></CardTitle>
          <CardTitle style={{color:'black', fontWeight:'bold'}}>Création d'un site internet sous React</CardTitle>
          <CardText>Je me suis lancé dans le développement de ce site internet codé entièrement en JavaScript grâce aux technologies React et Node.js. Ce projet me permet d'expérimenter avec le SEO des frameworks JS ainsi que de m'exercer au déploiement de plans de tracking.</CardText>
           <CardActions border>
             <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>

           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share"/>
           </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${machineLearningIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Projet Machine Learning: Prédiction de pertinence d'un produit sur les canaux publicitaires</CardTitle>
            <CardText>Ce projet m'a permit de mettre en application mes connaissances en Statistiques et Machine Learning appliqué au Marketing grâce à Python. </CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>

             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
        </div>

      )
    }
    else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <a style={{ textDecoration:'none',color:'black'}} href="https://github.com/Rosadojonathan/facebook-ads-automation/blob/master/facebook-ads-automation.py">
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Automatisation de la création de Facebook Ads avec Python</CardTitle>
            </a>
            <CardText style={{maxHeight:"50px"}}>Comment semi-automatiser la création de Facebook Ads grâce au SDK Python de l'API Marketing de Facebook en quelques heures.</CardText>
             <CardActions border>

               <Button colored style={{textAlign:'center'}}><a style={{ textDecoration:'none',color:'#000080'}} href="https://github.com/Rosadojonathan/facebook-ads-automation/blob/master/facebook-ads-automation.py">GitHub</a></Button>

             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Automatisation de la sponsorisation de posts Facebook</CardTitle>
            <CardText style={{maxHeight:"50px"}}>Comment semi-automatiser la sponsorisation de posts Facebook d'une page à nouveau grâce au SDK Python de l'API Marketing de Facebook.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 3){
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Slackbot d'alerte CPA Facebook Ads</CardTitle>
            <CardText style={{maxHeight:"70px"}}>Ce script envoie automatiquement des alertes sur un channel Slack lorsque les coûts d'acquisition publicitaires d'une campagne Facebook dépassent un certain montant.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold', fontWeight:'bold'}}>Slackbot d'alerte CPA Adwords</CardTitle>
            <CardText style={{maxHeight:"70px"}}>Ce script envoie automatiquement des alertes sur un channel Slack lorsque les coûts d'acquisition publicitaires d'une campagne AdWords dépassent un certain montant.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

            <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
              <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
              <CardTitle style={{color:'black', fontWeight:'bold'}}>Slackbot d'alerte absence de stocks sur fiche produit</CardTitle>
              <CardText style={{maxHeight:"70px"}}>Ce script itère toutes les heures sur les campagnes AdWords actives d'un compte pour lancer un crawler de type headless browser pour exécuter le JavaScript de la page et vérifier que le produit affiche bien des stocks dans la variante affichée par défaut.</CardText>
               <CardActions border>
                 <Button colored style={{textAlign:'center'}}>SOON ON GITHUB</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                 <IconButton name="share"/>
               </CardMenu>
            </Card>

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

          <meta name="description" content="Jonathan Rosado - Marketer spécialisé dans l'aspect technique du Marketing. J'allie la programmation et les statistiques au Marketing."/>

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Projets Tech-Market - Tech-Marketer" />
          <meta name="og:description" content="Jonathan Rosado - Marketer spécialisé dans l'aspect technique du Marketing. J'allie la programmation et les statistiques au Marketing."/>
          <meta name="og:url" content={window.location.href}/>
          <meta name="og:image" content="http://188.166.107.209/images/homepage.jpg" />
        </Helmet>

        <Tabs style={{padding:'0px 10px',width:"100%"}}activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab style={{width:'25%'}}><p>React</p></Tab>
          <Tab style={{width:'25%'}}> <p>Machine Learning</p></Tab>
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
