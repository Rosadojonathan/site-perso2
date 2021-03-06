import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Cell } from "react-mdl";
import { Bar } from "react-chartjs-2";
import Education from "../components/Education";
import {Experience, MaestroExperience} from "../components/Experience";
import {Skills, AlternateSkills} from "../components/Skills";
import Logo from "../components/Logo";

import adwordsLogo from "../img/adwords-logo-website.png";
import googleAnalyticsLogo from "../img/google-analytics.png";
import datacampLogo from "../img/datacamp.png";
import hubspotLogo from "../img/hubspot-logo.jpg";
import freecodecampLogo from "../img/freecodecamp.png";
import linkedinLogo from "../img/linkedin.png";
import githubLogo from "../img/github.png";
import imageJonathan from "../img/jonathan-rosado-image-cv.jpg";
import reactLogo from "../img/react.png";
import nodejsLogo from "../img/nodejs.png";
import pythonLogo from "../img/python.png";
import dockerLogo from "../img/docker.png";
import rLogo from "../img/rlogo.png";
import nginxLogo from "../img/nginx.png";
import postgresLogo from "../img/postgres.png";

import "../App.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Anglais",
          "Espagnol",
          "Allemand",
          "Italien",
          "Néerlandais",
          "Suédois",
          "Catalan",
          "Portugais",
          "Russe"
        ],
        datasets: [
          {
            label: "Niveau",
            //data:['C2','C2','C1','C1','B2','B2','B2','B2','B1'],
            data: [6, 6, 5.5, 5, 4.5, 4, 4, 3.5, 3, 0],
            backgroundColor: [
              "#f38b4a",
              "#f38b4a",
              "#6970d5",
              "#6970d5",
              "#56d798",
              "#56d798",
              "#56d798",
              "#56d798",
              "#ff8397",
              "#ff8397"
            ]
          }
        ]
      }
    };
  }

  render() {
    const skills = ["Acquisition de trafic","Développement web","Growth Hacking", "Automatisation", "Data Mining", "Optimisation du taux de conversion"];
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CV de Jonathan Rosado - Technical Marketer / Growth Engineer </title>

          <meta
            name="description"
            content="Jonathan Rosado - Marketer spécialisé dans l'aspect technologique du Marketing. J'allie la programmation et les statistiques au Marketing pour résoudre des problèmes avec des solutions innovantes."
          />

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="CV de Jonathan Rosado - Technical Marketer / Growth Engineer"
          />
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
        <Grid>
          <Cell col={4} id="personal-description">
            <div style={{ textAlign: "center" }}>
              <img
                src={imageJonathan}
                alt="avatar"
                style={{
                  marginTop: "3em",
                  borderRadius: "50%",
                  height: "300px",
                  width: "300px"
                }}
              />
            </div>
            <div style={{textAlign:"center"}}>
            <h2 style={{ paddingTop: "2em" }}>Jonathan Rosado</h2>
            <h4 style={{ color: "grey" }}>Technical Marketer</h4>
            <hr style={{ borderTop: "3px solid #3E2723", width: "65%",marginLeft:"auto", marginRight:"auto" }} />
            <div id="short-description" style={{backgroundColor:"rgb(251, 244, 235)", borderRadius:"10px"}}>
              <p style={{textAlign:'left', padding:'15px', color:"rgb(0,0,0,0.9)"}}>
                D'abord autodidacte dans le domaine des langues, j'ai ensuite
                développé un intérêt pour le Marketing Digital, la programmation
                et les statistiques que je fusionne pour aider les entreprises à
                accélérer leur croissance. Je cherche quotidiennement de nouveaux
                challenges intellectuels afin de développer mes compétences.
              </p>
            </div>
            <hr style={{ borderTop: "3px solid #3E2723", width: "65%",marginLeft:"auto", marginRight:"auto" }} />
            <h5>Adresse</h5>
            <p>Toulouse, Occitanie</p>
            <h5>Téléphone</h5>
            <p>+336.46.74.63.75</p>
            <h5>Email</h5>
            <p>jonathan.emil.rosado@gmail.com</p>

            <div style={{display:"inline-flex", marginRight:'20px'}}> 
             <div>
              <h5>LinkedIn</h5>
              <a
                style={{ cursor: "pointer" }}
                href="https://www.linkedin.com/in/jonathan-emil-rosado/"
              >
              
              <Logo logo={linkedinLogo} logoName="linkedin logo"/>
            </a>
            </div>
            <div> 
            <h5>GitHub</h5>
            <a
              style={{ cursor: "pointer" }}
              href="https://github.com/Rosadojonathan"
            >
            
            <Logo logo={githubLogo} logoName="github logo"/>

            </a>
            </div>
            </div> 

            <hr style={{ borderTop: "3px solid #3E2723", width: "65%",marginLeft:"auto", marginRight:"auto" }} />
            <h5>Certifications</h5>

            <Logo logo={adwordsLogo} logoName="adwords logo"/>
            <Logo logo={googleAnalyticsLogo} logoName="google analytics logo"/>
            <Logo logo={datacampLogo} logoName="datacamp logo"/>
            <Logo logo={hubspotLogo} logoName="adwords logo"/>
            <Logo logo={freecodecampLogo} logoName="FreeCodeCamp logo"/>

            <br />
            </div>
          </Cell>
          <Cell className="resume-right-col" style={{borderRadius:"12px"}} col={8}>
            <h3>Expérience</h3>
            <MaestroExperience
              startYear="Octobre 2018"
              endYear="Maintenant"
              jobName="Growth Engineer "
              company="Maestro Corporation"
              linkCompany="https://maestro-corporation.com/"
              />



            <Experience
              startYear="Février 2017"
              endYear="Maintenant"
              jobName="SEA Manager & Technical Marketer / Growth Engineer"
              company="Maestro Corporation"
              linkCompany="https://maestro-corporation.com/"
              jobDescription="En charge de l'acquisition payante sur les plateformes publicitaires (AdWords, Facebook Ads, Instagram Ads, Snapchat Ads) en FR, EN, ES, DE, IT et NL. J'ai mis en place de nombreux programmes d'automatisation et un modèle prédictif de Machine Learning afin d'augmenter mon efficacité et aider la startup à scaler son système d'acquisition."
            />

            <hr style={{ borderTop: "3px solid white" }} />
            <h3>Formation</h3>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Université Capitole - IAE Toulouse - Mention Très Bien"
              schoolDescription="Cette formation m'a permis de consolider mes connaissances en Marketing Digital acquises lors de mon expérience professionnelle en alternance, notamment en SEO et en stratégie Marketing. Mes mémoires traitent de l'automatisation du SEA et Social Media Advertising ainsi que de l'utilisation de Data Mining et d'algorithmes prédictifs pour accroître les performances d'acquisition de trafic. "
              schoolDegree="Master 2 - Marketing Digital"
            />

            <Education
              startYear={2016}
              endYear={2017}
              schoolName="Université Toulouse - Jean Jaurès "
              schoolDescription="Cette année de Commerce International m'a permis de développer mes compétences en Business Development ainsi qu'en négociation interculturelle."
              schoolDegree="Master 1 - Commerce International"
            />
            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Université Perpignan Via Domitia"
              schoolDescription="Lors de ma Licence en LEA, j'ai amélioré mes capacités de communication professionnelle en anglais, espagnol et allemand."
              schoolDegree="Licence Langues Etrangères Appliquées"
            />

            <hr style={{ borderTop: "3px solid white" }} />
            <h3>Technologies</h3>
            <Logo logo={reactLogo} logoName="react logo" />
            <Logo logo={nodejsLogo} logoName="nodejs logo"/>
            <Logo logo={pythonLogo} logoName="python logo" />
            <Logo logo={dockerLogo} logoName="docker logo" />
            <Logo logo={postgresLogo} logoName="postgres logo" />            
            <Logo logo={nginxLogo} logoName="nginx logo" />            
            <Logo logo={rLogo} logoName="R logo" />            

            <br/>
            <hr style={{ borderTop: "3px solid white",marginTop:"3em" }} />
            <h3>Compétences</h3>

            <AlternateSkills skills={skills} />
             
            {/* <Skills skill="SEA" progress={85} />
            <Skills skill="Data Analysis" progress={85} />
            <Skills skill="Python" progress={75} />
            <Skills skill="Machine Learning" progress={70} />
            <Skills skill="Statistiques" progress={70} />
            <Skills skill="Analytics" progress={70} />
            <Skills skill="SEO" progress={70} />
            <Skills skill="JavaScript" progress={65} />
            <Skills skill="R" progress={60} /> */}
            
            <hr style={{ borderTop: "3px solid white",marginTop:"3em" }} />
            <h3>Langues</h3>
            <Bar
              data={this.state.chartData}
              width={500}
              height={400}

              options={{
                title: {
                  display: true,
                  text: "Niveau en langues selon l'échelle CECRL",
                  fontSize: 16
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function(value) {
                          if (value === 1) return "A1";
                          else if (value === 2) return "A2";
                          else if (value === 3) return "B1";
                          else if (value === 4) return "B2";
                          else if (value === 5) return "C1";
                          else if (value === 6) return "C2";
                          else return "";
                        }
                      }
                    }
                  ]
                }
              }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
