const articleFacebookAdsApi = require('../ArticlesBlog/comment-creer-facebook-ads-avec-api.js').article;
const articleSlackbot = require('../ArticlesBlog/creer-un-slackbot.js').article;
const tcdsea = require('../ArticlesBlog/tcdsea.js').article;

module.exports.articlesDB = [
  {
    id:1,
    path:'creer-facebook-ads-avec-api',
    title:"Comment automatiser la création d'une Facebook Ad à partir de l'API ?",
    description:"Créer des publicités sur Facebook peut rapidement devenir un processus ennuyeux et répétitif. Si vous déjà remarqué qu'il existe peu de variation de contenu entre vos annonces à part quelques éléments c'est que l'automatisation peut potentiellement vous être utile. Dans cet article nous allons voir comment créer un script qui semi-automatise la création de Facebook Ads grâce à Python et l'API de Facebook.",
    content:`  ${articleFacebookAdsApi.content}`
},

{
  id:2,
  path:'comment-créer-un-slackbot',
  title:"Comment créer un Slackbot ?",
  description:`Si vous utilisez Slack pour communiquer au sein de votre entreprise vous êtes probablement déjà au courant des possibilités qu'offre cette application en matière de messages automatisés.Il est très facile de plugger Slack à des applications de IFTTT comme Zapier pour automatiser l'envoi de messages dépendant de déclencheurs simples tels qu'un flux RSS ou des cartes Trello.
Mais peut-être que vous désirez connecter un élément déclencheur qui n'est pas proposé par votre service d'IFTTT. Heureusement, il est extrêmement simple de créer son propre Slackbot.`,
  content:`${articleSlackbot.content}`

},

{
  id:3,
  path:'tableaux-croisés-dynamiques-et-sea',
  title:"Améliorez l'analyse de vos campagnes AdWords grâce aux Tableaux Croisés Dynamiques",
  description:`Les Tableaux Croisés Dynamiques sont les meilleurs amis des SEA Managers. En quelques clics vous pouvez en sortir des insights précieux. Dans cet article, j'explique comment déterminer les horaires / jours de la semaine et meilleurs appareils en termes de coûts d'acquisition sur votre compte AdWords grâce à Excel.`,
  content:`${tcdsea.content}`

},

]
