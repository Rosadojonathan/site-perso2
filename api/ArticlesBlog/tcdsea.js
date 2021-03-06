module.exports.article = {
  content: `
  <style>
    h1 {
      font-size: 2.5em;
      font-weight: bold;
    }

    h2 {
      font-size: 1.6em;
      font-weight:bold;
    }
    p {
      font-size: 1.1em;
    }

    img {
      width:90%;
      height:auto;
    }
  </style>

  <p>Les Tableaux Croisés Dynamiques sont les meilleurs amis des SEA Managers. En quelques clics vous pouvez en sortir des insights précieux. Dans cet article, j'explique comment déterminer les horaires / jours de la semaine et meilleurs appareils en termes de coûts d'acquisition sur votre compte AdWords grâce à Excel.</p>


  <h2>1) Rendez vous d'abord sur l'interface web AdWords</h2>


  <p>Créez un tableau dans l'onglet Rapports.</p>
  <img src="../images/tcd1.jpg" alt="">
  <br>
  <p>Selectionnez ensuite les dimensions: Heure de la journée, Jour de la semaine, Appareil, Coût, et Conversions. </p>
  <p>Modifiez la date selon la période que vous souhaitez étudier.</p>
  <p>Ne pas oublier de sélectionner 500 lignes en bas de l'onglet.</p>
  <img src="../images/tcd2.jpg" alt="">
  <p>Puis téléchargez votre rapport au format Excel (.csv)</p>

  <h2>2) Ouvrez ensuite votre rapport sur Excel </h2>

  <p>Vous devriez vous retrouver avec un rapport comme ceci:</p>
  <img style="width:70%" src="../images/tcd3.jpg" alt="">
  <br>

  <p>Vous aurez peut-être besoin de convertir les cellules coût et conversion en cellules de type monétaire et nombres. </p>
  <p>Ensuite, il vous faudra vous rendrez dans Insertion > Tableaux Croisés Dynamiques</p>

  <p>Disposez les champs de cette façon : </p>
  <p>Appareil dans filtre, Heure de la journée dans lignes et jour de la semaine dans Colonnes</p>
  <img src="../images/tcd4.jpg" alt="">
  <br>
  <p>Il vous faudra ensuite créer un champ calculé pour le CPA. La formule à rentrer est la suivante =SI(Conversions=0;Coût;Coût/Conversions) afin de ne pas avoir des messages d'erreurs de division par 0 lorsque vous n'enregistrez pas de conversion à un certain horaire.</p>
  <img src="../images/tcd5.jpg" alt="">
  <br>

  <p>Transformez ensuite la valeur CPA en valeur monétaire.</p>
  <img style="width:50%" src="../images/tcd6.jpg" alt="">
  <br>

  <p>Puis finalement, rajoutez du formatage conditionnel pour chaque colonne afin de vous aider à détecter des tendances plus facilement.</p>
  <img src="../images/tcd7.jpg" alt="">
  <br>

  <p>Et voilà, vous avez un Tableau Croisé Dynamique qui vous indique le CPA moyen par heure et jour de la semaine tous appareils confondus ou segmentés si vous cliquez sur le filtre en haut. Plutôt pas mal, non ? :)</p>
  <p>L'étape suivante est de déterminer les patterns d'horaires qui vous sont ou non profitables puis d'implémenter un script d'ajustement d'enchères automatiques suivant l'heure, le jour de la semaine et l'appareil. J'expliquerai dans un prochain article comment l'implémenter.</p>



  `
}
