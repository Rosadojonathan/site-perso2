const articleFacebookAdsApi = require("../ArticlesBlog/comment-creer-facebook-ads-avec-api.js")
  .article;
const articleSlackbot = require("../ArticlesBlog/creer-un-slackbot.js").article;
const tcdsea = require("../ArticlesBlog/tcdsea.js").article;
const marketersCode = require("../ArticlesBlog/pourquoi-les-marketers-devraient-apprendre-à-coder.js")
  .article;
const sentimentGraph = require("../ArticlesBlog/graph-analyse-de-sentiments-commentaires-facebook.js")
.article;
const rasaChatbot = require('../ArticlesBlog/developper-un-chatbot-avec-rasa.js').article;
const techMarketer = require('../ArticlesBlog/qu-est-ce-que-un-tech-marketer.js').article;

module.exports.articlesDB = [
  {
    id: 1,
    path: "creer-facebook-ads-avec-api",
    title:
      "Comment automatiser la création d'une Facebook Ad à partir de l'API ?",
    description:
      "Créer des publicités sur Facebook peut rapidement devenir un processus ennuyeux et répétitif. Si vous déjà remarqué qu'il existe peu de variation de contenu entre vos annonces à part quelques éléments c'est que l'automatisation peut potentiellement vous être utile. Dans cet article nous allons voir comment créer un script qui semi-automatise la création de Facebook Ads grâce à Python et l'API de Facebook.",
    content: `  ${articleFacebookAdsApi.content}`,
    image:'/images/facebook-api1.jpg',
    date:"07/03/2018"
  },

  {
    id: 2,
    path: "comment-creer-un-slackbot",
    title: "Comment créer un Slackbot ?",
    description: `Si vous utilisez Slack pour communiquer au sein de votre entreprise vous êtes probablement déjà au courant des possibilités qu'offre cette application en matière de messages automatisés.Il est très facile de plugger Slack à des applications de IFTTT comme Zapier pour automatiser l'envoi de messages dépendant de déclencheurs simples tels qu'un flux RSS ou des cartes Trello.
Mais peut-être que vous désirez connecter un élément déclencheur qui n'est pas proposé par votre service d'IFTTT. Heureusement, il est extrêmement simple de créer son propre Slackbot.`,
    content: `${articleSlackbot.content}`,
    image:"/images/slack4.jpg",
    date:"10/03/2018"
  },

  {
    id: 3,
    path: "tableaux-croises-dynamiques-et-sea",
    title:
      "Améliorez l'analyse de vos campagnes AdWords grâce aux Tableaux Croisés Dynamiques",
    description: `Les Tableaux Croisés Dynamiques sont les meilleurs amis des SEA Managers. En quelques clics vous pouvez en sortir des insights précieux. Dans cet article, j'explique comment déterminer les horaires / jours de la semaine et meilleurs appareils en termes de coûts d'acquisition sur votre compte AdWords grâce à Excel.`,
    content: `${tcdsea.content}`,
    image:'/images/tcd7.jpg',
    date:"17/03/2018"
  },
  {
    id: 4,
    path: "pourquoi-les-marketers-devraient-apprendre-a-coder",
    title: "Pourquoi les Marketers devraient apprendre à coder ?",
    description: `Coder ne devrait pas être l'apanage des développeurs, cette compétence a ses avantages à tous les niveaux d'une entreprise et notamment pour le marketing. Développer une double-compétence peut être le meilleur choix que vous ayez fait cette année... `,
    content: `${marketersCode.content}`,
    image:'/images/pourquoi-les-marketers-devraient-apprendre-à-coder/projects.jpg',
    date:"21/03/2018"
  },
  {
    id: 5,
    path: "graph-analyse-de-sentiments-commentaires-facebook-ads",
    title: "Analyse de sentiments de commentaires Facebook Ads",
    description: `L'analyse de sentiments de commentaires de publicités Facebook permet au Marketer de garder une vision globale sur la réception de ses publicités par son audience.
    Il s'agit d'une métrique importante car si de nombreux commentaires négatifs sont laissés non-traités la situation peut nuire à votre capacité de conversion de prospects.`,
    content: `${sentimentGraph.content}`,
    image: '/images/analyse-de-sentiments.jpg',
    date:"21/10/2018"
  },
  {
    id: 6,
    path: "developper-un-chatbot-avec-rasa",
    title: "Développer un chatbot avec RASA",
    description: `Dans cet article j'explique comment j'ai utilisé une librairie open source de NLU pour créer un chatbot pouvant tourner en local ou sur votre propre serveur. Il s'agit de la Stack RASA : composée de Rasa Core et Rasa NLU. J'ai cherché à utiliser RASA pour un projet de chatbot qui puisse automatiquement répondre à des demandes assez simples sur ma page de contact. Ensuite, je l'ai déployé sur mon serveur grâce à Docker et Nginx.`,
    content: `${rasaChatbot.content}`,
    image: '/images/chatbot.jpg',
    date:"22/11/2018"

  },
  {
    id:7,
    path:"qu-est-ce-qu-un-tech-marketer",
    title:"Mais qu'est-ce qu'un Tech-Marketer ?",
    description:`Le terme "Tech-Marketer" vous a peut-être intrigué, vous ne savez pas exactement ce qu'il représente et les différences avec les autres métiers du marketing technique ? Ici j'essaie de vous présenter ma vision du Tech-Marketer.`,
    content:`${techMarketer.content}`,
    image:'/images/qu-est-ce-qu-un-tech-marketer/tech-marketer.jpg',
    date:'05/12/2018'
  }
];
