
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



export class Experience extends Component {

  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}> <b> {this.props.jobName}</b></h4>
          <a id="company-link" style={{textDecoration:"none", color:"white"}} href={this.props.linkCompany}><i>{this.props.company}</i></a>
          <p><i>{this.props.schoolDegree}</i></p>
          <p>{this.props.jobDescription}</p>
        </Cell>

      </Grid>

    );
  }

}



export class MaestroExperience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
        <h4 style={{marginTop:'0px'}}> <b> {this.props.jobName}</b></h4>
          <a id="company-link" style={{textDecoration:"none", color:"white"}} href={this.props.linkCompany}><i>{this.props.company}</i></a>
          <br/>
        <p>▬ Data ▬</p>
                <ul> 
                  <li>Développement d'outils de NLU et d'analyse de polarité de sentiments à des fins d'automatisation d'acquisition de trafic et de gestion de l'expérience client. (API: Twitter, Zendesk, Faceboook) Stack NLU (RASA NLU, VADER)</li>
                  <li>Dashboards de visualisation de données interactives (Dash)</li>
                  <li>Mise en place de data pipelines pour mesurer le taux de rétention par typologie d'évènement</li>
                  <li>Développement d'un modèle de classification supervisée (Random Forests, SVM) pour prédire la pertinence d'un produit via les canaux d'acquisition payante.</li>
                </ul>
                <p>▬ Tech ▬</p>
                <ul>
                  <li>Développement Full Stack d'applications web (Stack: React, NodeJS/Flask, Postgres/SQLite, Redis, Docker, Nginx)</li>
                  <li>Scripts d'automatisation en Python</li>
                </ul>

        </Cell>
      </Grid>
    )
  }
}


