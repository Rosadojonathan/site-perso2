module.exports.article = {
  content: `
  <style>
    h1 {
      font-size: 1.9em;
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

  <p>Coder ne devrait pas être l'apanage des développeurs, cette compétence a ses avantages à tous les niveaux d'une entreprise et notamment pour le marketing. Développer une double-compétence peut être le meilleur choix que vous ayez fait cette année... </p>
  <br>
  <p><i>"Programming is the closest thing we have to superpowers."</i></p>
  <br>
  <h2>1) Automatisez des tâches chronophages</h2>


  <p>C'est le premier avantage évident. En apprenant à coder vous pouvez facilement créer un <b>script qui exécute automatiquement des tâches à votre place</b>.</p>
  <p>Vous récupérez quotidiennement des données d'un site internet ? Un scraper de contenu est facile à mettre en place en Python, ce programme ira visiter les pages internet que vous lui spécifiez pour récupérer les informations qui vous intéressent, vous récupérerez ensuite les résultats sous forme de CSV ou toute autre format qui vous convient. </p>
  <p>Vous créez des publicités manuellement ? Facebook et AdWords mettent des API à disposition des marketers pour qu'ils puissent automatiser ces tâches là, j'en parle notamment dans mon article sur <a href="/creer-facebook-ads-avec-api">l'automatisation des Facebook Ads</a>.</p>
  <p> Vous en avez marre de faire du reporting pendant des heures ?
  Encore une fois, les API existent pour que vous puissiez rapidement récupérer les données qui vous intéressent.</p>


  <h2>2) Améliorez votre communication avec les développeurs</h2>

  <p>Second avantage crucial. Les marketers ont souvent l'impression de parler une langue différente des développeurs et de nager dans un océan d'incompréhension. "Mais je voulais un bouton qui redirige vers ma landing page ? Comment veux-tu que je sois plus clair ?"</p>
  <br>
  <img src="https://jonathanrosado.fr/images/pourquoi-les-marketers-devraient-apprendre-%C3%A0-coder/projects.jpg" alt="communiquer avec les développeurs est parfois compliqué">
  <br>
  <p><b>En apprenant à coder vous aller comprendre la façon de penser des développeurs</b>. Il vous sera ensuite bien plus facile d'écrire des specs claires qui demandent moins d'aller-retours pour des clarifications. Résultat ? Du temps gagné pour les deux parties.</p>
  <br>
  <p>Beaucoup de SEO grincent des dents lorsque le CTO leur annonce que la refonte de leur site internet sera codée dans un framework JavaScript. "Mais le JavaScript c'est maaal pour les moteurs de recherche ? Pourquoi est-ce qu'ils peuvent pas me faire un site tout beau tout simple ?"
  En apprenant React j'ai pu comprendre pourquoi ce framework est adoré de nombreux développeurs, comment il fonctionne et quelles sont ses limitations SEO. Cela me permet d'éviter d'aborder la question de manière conflictuelle et proposer des solutions aux problématiques SEO.
  </p>

  <h2>3) Élargissez votre façon de penser le marketing</h2>
  <p>En apprenant à coder vous allez rapidement développer une <b>intuition de ce qu'il est possible de faire techniquement ou pas</b>. Vous comprendrez que certaines tâches qui vous semblaient complexes à coder sont en fait très simples à mettre en place et à l'inverse certaines fonctionnalités qui vous semblaient
  assez simples sont un challenge pour n'importe quel développeur.</p>
  <p>Lorsque j'étais en stage et chargé de l'ouverture de produits dans le backoffice d'un site e-commerce, mes compétences naissantes en code m'avaient permis de détecter une opportunité d'automatisation simple à mettre en place que je n'aurais pas remarqué autrement.
  En effet, les détails des fiches produits à ouvrir nous étaient transmises par un Google Sheets. Il fallait donc que je recopie manuellement ces informations dans back-office du site pour pouvoir créer la fiche produit. C'était une perte de temps d'une dizaine de minutes à chaque fois à cause des divers aller-retours pour vérifier les informations. Et malgré tout, pas une semaine ne passait sans qu'il n'y ait une petite erreur sur des fiches produits. Heureusement, je m'étais déjà amusé avec l'API Google Sheets et je savais qu'il était possible de récupérer les informations de manière automatisée tant qu'un template était respecté. Je savais donc comment récupérer les données, il ne me restait plus qu'à savoir comment les incorporer automatiquement dans le BO du site. La solution que à laquelle j'avais pensé était d'automatiser le navigateur pour qu'il remplisse les formulaires du BO à ma place, je savais que c'était techniquement assez simple à mettre en place. En discutant avec un collègue plus techniquement expérimenté j'ai appris qu'il était beaucoup plus facile de profiter des API de notre site et de lui envoyer les données que j'avais récupéré sous un certain format pour que la fiche soit automatiquement créé.
  </p>
  <p>Résultats ? Ce qui nous prennait une <b> dizaine de minutes à chaque fois est dorénavant fait automatiquement en une dizaine de secondes et avec moins d'erreurs.</b></p>

  <h2>4) Prototypez rapidement vos idées</h2>

  <p>Vous avez une intuition qui vous dit que rajouter une certaine feature à votre site vous permettrait d'obtenir plus de conversions ? Mais vous ne savez pas coder, donc vous allez être obligé de demander à votre développeur de le faire pour vous. Ca pourrait être une feature rapide à coder, mais votre développer a un pipe surchargé. Il ne pourra pas s'en occuper avant la semaine prochaine.
  Résultats ? Vous perdez 5 jours précieux à attendre pour une tâche qui peut être faite en une dizaine de minutes. En développant vos compétences en code vous réduirez considérablement le délai entre l'idée et son exécution.
  </p>


  <h2>5) Améliorez votre analyse des données</h2>

  <p>Apprendre à coder vous permettra de mieux analyser les données de vos sites internet de deux façons.</p>
  <br>
  <p>D'une part, en apprenant le JavaScript vous comprendrez comment sont collectées les données qui s'affichent dans Google Analytics, à quoi elles font exactement référence et pourquoi elles sont parfois incorrectes.</p>
  <br>
  <p>D'autre part, grâce à des langages comme Python vous pourrez améliorer l'efficacité de votre processus d'analyse de données.
  Python est en effet un langage fantastique qui vous permet de réaliser de nombreuses tâches rapidement et simplement. Il bénéficie de nombreuses librairies comme <a href="https://pandas.pydata.org/">Pandas</a>  ou <a href="http://www.numpy.org/">Numpy</a> pour analyser des volumes de données conséquents. </p>
  <p>Vous pourrez facilement vérifier si des données sont corrélées. Exemple ici avec une heatmap créé à partir de deux lignes de code en Python</p>
  <br>
  <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">sns</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">heatmap(data</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">corr(),cmap</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;Greens&#39;</span><span style="color: #f8f8f2">)</span>
  <span style="color: #f8f8f2">plt</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">show()</span>
  </pre></div>
  <br>

  <img src="https://jonathanrosado.fr/images/pourquoi-les-marketers-devraient-apprendre-à-coder/heatmap.jpg" alt="heatmap de données corrélées">

  <p>En deux lignes de code je peux déterminer quelles dimensions sont corrélées grâce à la densité de la coloration. Si j'avais du faire ce travail manuellement avec Excel ça m'aurait pris bien plus de temps...</p>
  <br>
  <p>Encore un autre exemple: </p>
  <br>
  <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">sns</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">barplot(x</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;Deezer Fans&#39;</span><span style="color: #f8f8f2">,y</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;Genre&#39;</span><span style="color: #f8f8f2">,data</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">data)</span>
  <span style="color: #f8f8f2">plt</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">show()</span>
  </pre></div>
  <br>
  <img src="https://jonathanrosado.fr/images/pourquoi-les-marketers-devraient-apprendre-à-coder/barplot.jpg" alt="barplot corrélation entre nombre de fans sur Deezer et genre musical">
  <br>
  <p>En deux lignes de code je peux tracer un graphique me montrant le nombre moyens de fans Deezer par artistes d'un petit dataset regroupés selon leur genre musical. Les barres noires représentent l'incertitude autour de cette mesure.</p>
  <br>



  <h3>Quels langages apprendre ?</h3>

  <p>Le premier langage que je vous recommande est bien évidemment <b>Python</b>. C'est un langage de programmation extrêmement polyvalent. Vous pourrez presque tout faire avec. De la création de crawlers/scrapers, à la mise en place de back-ends pour vos sites internet en passant par l'analyse de données, Python est un excellent langage.</p>
  <p>De plus, il possède une syntaxe limpide et facile à apprendre. La philosophie de ce langage est de préférer le code simple, élégant et lisible. Commencer par Python vous inculquera donc de bonnes pratiques de programmation.</p>

  <p>Le second langage à apprendre est sans aucun doute <b>JavaScript</b>. C'est LE langage du web par excellence. Tous vos outils de tracking tels que Google Analytics, MixPanel, Hotjar, etc. utilisent JavaScript pour analyser le comportement des internautes. En apprenant ce langage vous serez plus à même de tracker efficacement les métriques qui vous intéressent.</p>
  <p>Si vous êtes un peu ambitieux vous pourrez ensuite vous aventurer dans le domaine des frameworks JavaScript tels que React et Express qui vous permettront de créer le front-end et le back-end d'un site internet moderne, dans un seul et même langage. Et en plus de ça vous serez cools. </p>

  <p>Un langage un peu moins populaire en ce moment mais extrêmement répandu est <b>Php</b>. Si vous utilisez un site WordPress ou une plateforme e-commerce comme PrestaShop appprendre ce langage vous permettra de modifier directement son comportement sans passer par un développeur.</p>

  <p>Pas vraiment un langage de programmation mais tout de même utile à connaître <b>SQL</b> est un langage qui vous permet de récupérer des données dans une base de données. Sa syntaxe est très proche de l'anglais, il est donc assez simple d'en apprendre les bases et d'être opérationnel. </p>

  <p>Si vous êtes très chaud de l'analyse statistique de vos données vous pouvez jeter un coup d'oeil à <b>R</b>. C'est le langage préféré des statisticiens. Il est encore très populaire dans le domaine académique mais en recul face à Python dans le monde professionnel. Néanmoins il possède de nombreuses
  librairies qui permettent de performer toute sorte d'analyses.</p>

  <p>Je n'ai pas mentionné <b>HTML/CSS</b> non plus car ce ne sont pas des langages de programmation mais il est bien évidemment indispensable de les apprendre. En très peu de temps vous arriverez à vous débrouiller plutôt bien.</p>


  <h3>Comment apprendre à coder ? </h3>

  <p>J'aborderai peut être ce sujet en plus de détails dans un prochain article mais le coeur du message que je veux transmettre ici c'est qu'il est possible pour un marketer sans background technique d'apprendre
  à coder en autodidacte.</p>
  <p>Quelques unes des ressources intéressantes que j'ai utilisé : </p>

  <p><a href="https://www.codecademy.com/">Codecademy</a> est parfait pour apprendre les bases de la programmation en Python, JavaScript, SQL et d'autres langages.</p>
  <p>Grâce à une interface interactive vous voyez en direct les résultats des exercices que vous codez et le site vous corrige lorsque vous commettez des erreurs.</p>
  <img src="https://i.ytimg.com/vi/YMw293DELs0/maxresdefault.jpg" alt="codecademy">


  <br>
  <p><a href="https://www.freecodecamp.org/">FreeCodeCamp</a> vous apprendra à résoudre des problèmes par vous mêmes, en effet il vous tient bien moins par la main que Codecademy. Lors du parcours FreeCodeCamp vous apprendrez le JavaScript côté Front-end et Back-end. </p>
  <img src="https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/original/000/540/173/540173-edb33c4f1722ac3202e2d949b49401e74a73de53.png?1434260165" alt="freecodecamp">


  <br>
  <p><a href="https://www.datacamp.com/">DataCamp</a> pour ceux qui sont intéressés par l'analyse de données et le Machine Learning en Python. Vous apprendrez de bonnes bases mais n'hésitez pas à appliquer ce que vous apprenez dans vos projets persos car le site tient un peu trop ses élèves par la main, tout comme Codecademy malheureusement.</p>
  <img src="http://community.datacamp.com.s3.amazonaws.com/community/production/ckeditor_assets/pictures/84/content_screenshot_2016-07-15_11_33_05.png" alt="datacamp python">
`
};
