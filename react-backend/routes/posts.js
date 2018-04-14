var express = require("express");
var router = express.Router();
const articlesDB = require("../filesystem/articlesDB").articlesDB;

// postList = [
//   {id:1,date:'Mar 19 2018 07:00:00 PM',cardTitle:"Comment automatiser la création d'une Facebook Ad à partir de l'API ?",cardText:"Créer des publicités sur Facebook peut rapidement devenir un processus ennuyeux et répétitif. Si vous déjà remarqué qu'il existe peu de variation de contenu entre vos annonces à part quelques éléments c'est que l'automatisation peut potentiellement vous être utile. Dans cet article nous allons voir comment créer un script qui semi-automatise la création de Facebook Ads grâce à Python et l'API de Facebook.",linkTitle:"créer-facebook-ads-avec-api"},
//   {id:2,date:'Mar 20 2018 07:00:00 PM',cardTitle:"Comment créer un Slackbot",cardText:`Si vous utilisez Slack pour communiquer au sein de votre entreprise vous êtes probablement déjà au courant des possibilités qu'offre cette application en matière de messages automatisés.Il est très facile de plugger Slack à des applications de IFTTT comme Zapier pour automatiser l'envoi de messages dépendant de déclencheurs simples tels qu'un flux RSS ou des cartes Trello.
// Mais peut-être que vous désirez connecter un élément déclencheur qui n'est pas proposé par votre service d'IFTTT. Heureusement, il est extrêmement simple de créer son propre Slackbot.`,linkTitle:"comment-créer-un-slackbot"},
//   {id:3,date:'Mar 21 2018 07:00:00 PM',cardTitle:"Améliorez l'analyse de vos campagnes AdWords grâce aux Tableaux Croisés Dynamiques",linkTitle:'tableaux-croisés-dynamiques-et-sea',cardText:`Les Tableaux Croisés Dynamiques sont les meilleurs amis des SEA Managers. En quelques clics vous pouvez en sortir des insights précieux. Dans cet article, j'explique comment déterminer les horaires / jours de la semaine et meilleurs appareils en termes de coûts d'acquisition sur votre compte AdWords grâce à Excel.`},
// ]

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(
    articlesDB.sort(function(a, b) {
      return b.id - a.id;
    })
  );
});

module.exports = router;
