
module.exports.article =  {
  content: `



  <p> Créer des publicités sur Facebook peut rapidement devenir un processus ennuyeux et répétitif. Si vous avez déjà remarqué qu'il existe peu de variation de contenu entre vos annonces à part quelques éléments,
  c'est que l'automatisation peut potentiellement vous être utile.

  Dans cet article nous allons voir comment créer un script qui semi-automatise la création de Facebook Ads grâce à Python et l'API de Facebook.</p>


  <h2>I) Enregistrer une app Facebook sur developers.facebook.com</h2>

  <p>
    Rendez-vous sur https://developers.facebook.com/ puis dans l'espace Mes Apps où vous ajouterez une application.
  </p>
  <p>Il va ensuite vous falloir aller dans les paramètres pour effectuer quelques réglages.</p>
  <ul>
    <li>Dans Paramètres > Avancé : renseignez l'ID de vos comptes publicitaires autorisés </li>
    <li>Dans Paramètres > Général : renseignez une URL pour votre Politique de confidentialité et de conditions de service. Ça peut être l'URL de votre site internet.</li>
    <li>Dans Produits ajoutez l'API Marketing.</li>
    <li>Dans API Marketing > Paramètres : Ajoutez vos comptes publicitaires.</li>
    <li>Rendez ensuite votre application publique.</li>
  </ul>

  <p>Pensez à récupérer les informations suivantes pour ensuite passer des appels d'API</p>
  <ul>
    <li>Identifiant de l'App</li>
    <li>Clé secrète</li>
    <li>Identifiant de vos comptes publicitaires préfixés de "act_"</li>
    <li>Un token d'accès</li>

  </ul>

  <img src="../images/facebook-api1.jpg" alt="" />
  <br />


  <p>Pour obtenir le token d'accès il faudra vous rendre sur <a href="https://developers.facebook.com/tools/access_token/"> ce lien</a> après avoir donné les autorisations à votre app.</p>
  <img src="../images/facebook-api3.jpg" alt="" />
  <br />
  <p>Ensuite vous pourrez cliquer sur débuguer: </p>
  <img src="../images/facebook-api2.jpg" alt="access token facebook app" />
  <br />
  <p>Pour étendre votre token d'accès utilisateur et obtenir un token d'accès qui n'expire jamais (celui par défaut expire au bout d'une heure)</p>
  <img src="../images/facebook-api4.jpg" alt="" />

  <h2>II) C'est bon j'ai mon application, et le code du coup ?</h2>

  <p>Ce script utilise le SDK Python FacebookAds que vous pouvez trouver  <a href="https://github.com/facebook/facebook-python-ads-sdk"> ici</a>.</p>
  <p>Je l'ai combiné à deux autres scripts de scraping afin de récupérer les images et le contenu variable depuis les fiches produits de mon site que j'utilise dans ma publicité. Ce sont des scrapers très basiques que vous n'aurez aucun mal à répliquer de votre côté si vous en avez besoin.</p>
  <p>Voici un example de scraper qui me récupère une image :</p>

  <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">bs4</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">BeautifulSoup</span>
  <span style="color: #f92672">import</span> <span style="color: #f8f8f2">re</span>
  <span style="color: #f92672">import</span> <span style="color: #f8f8f2">requests</span>

  <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">scrape_image</span><span style="color: #f8f8f2">(linkToParse):</span>


      <span style="color: #f8f8f2">req</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">requests</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get(linkToParse)</span>
      <span style="color: #f8f8f2">pattern</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">re</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">compile(</span><span style="color: #e6db74">r&#39;\bhttps?:[^)&#39;&#39;&quot;\s]+\.(?:jpg|jpeg|gif|png)&#39;</span><span style="color: #f8f8f2">)</span>
      <span style="color: #f8f8f2">soup</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">BeautifulSoup(req</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">text,</span><span style="color: #e6db74">&#39;html.parser&#39;</span><span style="color: #f8f8f2">)</span>
      <span style="color: #f8f8f2">image_url</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">soup</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">find(</span><span style="color: #e6db74">&quot;div&quot;</span><span style="color: #f8f8f2">,{</span><span style="color: #e6db74">&quot;class&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;image--artist-lbv2&quot;</span><span style="color: #f8f8f2">})</span>
      <span style="color: #f8f8f2">image_url</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">soup</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">text</span>

      <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">pattern</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">findall(image_url)[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span>
  </pre></div>

  <p>J'utilise une expression régulière pour trouver tout types d'images contenues dans des balises div ayant classe. On apprécie la simplicité de Python dans ces cas là !</p>




  <br>
  <p>Afin de pouvoir automatiser la création j'ai choisi de standardiser certains paramètres comme le budget journalier par défault, le texte de l'annonce à part quelques éléments ou l'objectif de campagne. J'aurais pu éventuellement rajouter la possibilité de renseigner le budget journalier en tant que variable lors du lancement du script mais je ne souhaitais pas rajouter plus d'étapes, le but étant de gagner du temps.</p>
  <br>
  <p>Pour le ciblage des intérêts j'ai pris le choix de récupérer le premier évènement renvoyé par TargetingSearch.search, auquel je passe les paramètres du nom de la variable que je souhaite cibler (une marque, une personnalité, un artiste, etc.). Parfois le résultat peut être différent des attentes, comme lorsqu'on passe le paramètres "Pink", le 1er centre d'intérêt est la couleur et non la chanteuse. Cela implique de surveiller les résultats obtenus par le script. </p>

  <p>Vous remarquerez que je suis obligé de distinguer de manière assez sale si je souhaite cibler une ville ou un pays. C'est dû au fonctionnement de l'API qui nous ne permet pas de passer une requête indifférenciée entre les deux, malheureusement. </p>
  <p>La qualité du code n'est de toute façon pas au rendez-vous de manière générale, j'ai fait ce script en un week-end mais elle pourrait facilement être améliorée. Je m'y attaquerai peut être lors d'une V2 ! </p>

  <p>Pour vous en servir de votre côté vous aurez besoin de remplacer mes deux scrapers (scrape_website et image_path) par vos propres scrapers et les informations comme l'ID de votre page Facebook, l'ID de votre compte publicitaire, le code de votre Pixel de Tracking, etc. puis d'éxécuter le script depuis votre terminal.</p>
  <!-- HTML generated using hilite.me -->
  <div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
  <pre style="margin: 0; line-height: 125%">
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.api</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">FacebookAdsApi</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adaccount</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdAccount</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adaccountuser</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdAccountUser</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adimage</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdImage</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.campaign</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">Campaign</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adset</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdSet</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adcreative</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdCreative</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adcreativeobjectstoryspec</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdCreativeObjectStorySpec</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adcreativelinkdata</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdCreativeLinkData</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adcreativetextdata</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdCreativeTextData</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adcreativephotodata</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdCreativePhotoData</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.ad</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">Ad</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adpreview</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdPreview</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.targeting</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">Targeting</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.targetingsearch</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">TargetingSearch</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.targetinggeolocationcustomlocation</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">TargetingGeoLocationCustomLocation</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads.adobjects.adimage</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">AdImage</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">facebookads</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">adobjects</span>

  <span style="color: #f92672">import</span> <span style="color: #f8f8f2">datetime</span>

  <span style="color: #f92672">import</span> <span style="color: #f8f8f2">credentials</span>

  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">scrape_website</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">scrape_info,</span> <span style="color: #f8f8f2">scrape_image,</span> <span style="color: #f8f8f2">scrape_with_requests_only</span>
  <span style="color: #f92672">from</span> <span style="color: #f8f8f2">image_path</span> <span style="color: #66d9ef">import</span> <span style="color: #f8f8f2">download_image_from_url</span>



  <span style="color: #f8f8f2">my_app_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">credentials</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">credentials[</span><span style="color: #e6db74">&#39;app_id&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">my_app_secret</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">credentials</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">credentials[</span><span style="color: #e6db74">&#39;app_secret&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">my_access_token</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">credentials</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">credentials[</span><span style="color: #e6db74">&#39;access_token&#39;</span><span style="color: #f8f8f2">]</span>

  <span style="color: #f8f8f2">page_id_facebook</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;YourPageID&quot;</span>
  <span style="color: #f8f8f2">account_publicitaire</span>  <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;act_accountNumberHere&quot;</span>

  <span style="color: #f8f8f2">my_account</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdAccount(account_publicitaire)</span>
  <span style="color: #f8f8f2">FacebookAdsApi</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">init(my_app_id,</span> <span style="color: #f8f8f2">my_app_secret,</span> <span style="color: #f8f8f2">my_access_token)</span>


  <span style="color: #f8f8f2">daily_budget</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1000000</span> <span style="color: #75715e">#10 000€ par jour :p</span>
  <span style="color: #f8f8f2">print(</span><span style="color: #e6db74">&#39;Vous voulez créer une Facebook Ads pour votre service.&#39;</span><span style="color: #f8f8f2">)</span>
  <span style="color: #f8f8f2">print(</span><span style="color: #e6db74">&#39;                                                                &#39;</span><span style="color: #f8f8f2">)</span>


  <span style="color: #f8f8f2">url</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">input(</span><span style="color: #e6db74">&quot;Entrez l&#39;URL de la fiche produit:  &quot;</span><span style="color: #f8f8f2">)</span>

  <span style="color: #f8f8f2">ville,</span> <span style="color: #f8f8f2">pays,</span> <span style="color: #f8f8f2">variable,</span> <span style="color: #f8f8f2">date</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">scrape_with_requests_only(url)</span>




  <span style="color: #f8f8f2">is_target_city</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">input(</span><span style="color: #e6db74">&quot;Voulez vous cibler une ville plutôt qu&#39;un pays ? (y/n)&quot;</span><span style="color: #f8f8f2">)</span>

  <span style="color: #66d9ef">if</span> <span style="color: #e6db74">&#39;y&#39;</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">is_target_city</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">lower():</span>
      <span style="color: #f8f8f2">is_target_city</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">True</span>
  <span style="color: #66d9ef">else</span><span style="color: #f8f8f2">:</span>
      <span style="color: #f8f8f2">is_target_city</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">False</span>


  <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">is_target_city:</span>
      <span style="color: #f8f8f2">target_location</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">input(</span><span style="color: #e6db74">&#39;Entrez le nom de la ville que vous voulez cibler:   &#39;</span><span style="color: #f8f8f2">)</span>
  <span style="color: #66d9ef">else</span><span style="color: #f8f8f2">:</span>
      <span style="color: #f8f8f2">target_location</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">input(</span><span style="color: #e6db74">&quot;Entrez le nom du pays que vous voulez cibler:   &quot;</span><span style="color: #f8f8f2">)</span>



  <span style="color: #66d9ef">try</span><span style="color: #f8f8f2">:</span>
      <span style="color: #f8f8f2">image_url</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">scrape_image(url)</span>
      <span style="color: #f8f8f2">print(image_url)</span>
      <span style="color: #f8f8f2">image_path</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">download_image_from_url(image_url)</span>
      <span style="color: #f8f8f2">print(image_path)</span>
  <span style="color: #66d9ef">except</span><span style="color: #f8f8f2">:</span>
      <span style="color: #f8f8f2">image_path</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">input(</span><span style="color: #e6db74">&quot;Entrez le path de l&#39;image utilisée pour la publicité: &quot;</span><span style="color: #f8f8f2">)</span>


  <span style="color: #f8f8f2">campaign</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Campaign(parent_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">account_publicitaire)</span>


  <span style="color: #f8f8f2">campaign[Campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">name]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">variable</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot; &quot;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">pays</span>
  <span style="color: #f8f8f2">campaign[Campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">configured_status]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Status</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">active</span>
  <span style="color: #f8f8f2">campaign[Campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">objective]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Objective</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">conversions</span>

  <span style="color: #f8f8f2">campaign</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">remote_create()</span>
  <span style="color: #f8f8f2">campaign</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">campaign[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">id]</span>

  <span style="color: #f8f8f2">ad_set</span> <span style="color: #f92672">=</span>  <span style="color: #f8f8f2">AdSet(parent_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">account_publicitaire)</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">campaign_id]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">campaign</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">name]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">variable</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&#39; &#39;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">target_location</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">optimization_goal]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">OptimizationGoal</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">offsite_conversions</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">destination_type]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;WEBSITE&quot;</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">promoted_object]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;pixel_id&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&#39;YOURPIXELID&#39;</span><span style="color: #f8f8f2">,</span>
      <span style="color: #e6db74">&#39;custom_event_type&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;PURCHASE&#39;</span><span style="color: #f8f8f2">,</span>
  <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">billing_event]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">BillingEvent</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">impressions</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">is_autobid]</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">True</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">daily_budget]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">daily_budget</span>
  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">start_time]</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">datetime</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">datetime</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">now()</span>
  <span style="color: #f8f8f2">targeting</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{}</span>

  <span style="color: #f8f8f2">params_location</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;q&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">target_location,</span>
      <span style="color: #e6db74">&#39;type&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;adgeolocation&#39;</span>
  <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">location</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">TargetingSearch</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">search(params</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">params_location)</span>

  <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">is_target_city:</span>
      <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">geo_locations]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
       <span style="color: #e6db74">&quot;cities&quot;</span><span style="color: #f8f8f2">:</span>
           <span style="color: #f8f8f2">{</span> <span style="color: #e6db74">&quot;key&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">location[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;key&#39;</span><span style="color: #f8f8f2">]},</span>
       <span style="color: #f8f8f2">}</span>
  <span style="color: #66d9ef">else</span><span style="color: #f8f8f2">:</span>
      <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">geo_locations]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&quot;countries&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">location[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;country_code&#39;</span><span style="color: #f8f8f2">]</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">split()</span>
      <span style="color: #f8f8f2">}</span>

  <span style="color: #f8f8f2">params_interest</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;q&#39;</span><span style="color: #f8f8f2">:variable,</span>
      <span style="color: #e6db74">&#39;type&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;adinterest&#39;</span><span style="color: #f8f8f2">,</span>
      <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">interest</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">TargetingSearch</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">search(params</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">params_interest)</span>
  <span style="color: #f8f8f2">interest_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">interest[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">interest_name</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">interest[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;name&#39;</span><span style="color: #f8f8f2">]</span>

  <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">interests]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span>
            <span style="color: #f8f8f2">{</span>
              <span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">:interest_id,</span>
              <span style="color: #e6db74">&#39;name&#39;</span><span style="color: #f8f8f2">:interest_name,</span>
              <span style="color: #f8f8f2">}</span>
             <span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">publisher_platforms]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;facebook&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;instagram&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;messenger&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">facebook_positions]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;feed&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">instagram_positions]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;stream&#39;</span><span style="color: #f8f8f2">]</span>
  <span style="color: #f8f8f2">targeting[Targeting</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">messenger_positions]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;messenger_home&#39;</span><span style="color: #f8f8f2">]</span>

  <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">targeting]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">targeting</span>

  <span style="color: #f8f8f2">ad_set</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">remote_create()</span>


  <span style="color: #f8f8f2">img</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdImage(parent_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">account_publicitaire)</span>
  <span style="color: #f8f8f2">img[AdImage</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">filename]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">image_path</span>
  <span style="color: #f8f8f2">img</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">remote_create()</span>
  <span style="color: #f8f8f2">image_hash</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">img</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get_hash()</span>




  <span style="color: #f8f8f2">link_data</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdCreativeLinkData()</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">link]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">url</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">image_hash]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">image_hash</span>




  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">message]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;Le texte de votre publicité ici.&quot;</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">description]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;Le petit message en dessous du titre de la publicité.&quot;</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">name]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;Le titre de votre publicité&quot;</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">caption]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&#39;votredomaine.fr&#39;</span>


  <span style="color: #f8f8f2">call_to_action</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;type&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&#39;LEARN_MORE&#39;</span><span style="color: #f8f8f2">,</span>
      <span style="color: #e6db74">&#39;value&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
          <span style="color: #e6db74">&#39;link&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">url,</span>
      <span style="color: #f8f8f2">},</span>
  <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">link_data[AdCreativeLinkData</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">call_to_action]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">call_to_action</span>

  <span style="color: #f8f8f2">object_story_spec</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdCreativeObjectStorySpec()</span>
  <span style="color: #f8f8f2">object_story_spec[AdCreativeObjectStorySpec</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">page_id]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">page_id_facebook</span>
  <span style="color: #f8f8f2">object_story_spec[AdCreativeObjectStorySpec</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">link_data]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">link_data</span>



  <span style="color: #f8f8f2">creative</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">AdCreative(parent_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">account_publicitaire)</span>
  <span style="color: #f8f8f2">creative[AdCreative</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">url_tags]</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;vos balises utm ici&quot;</span>
  <span style="color: #f8f8f2">creative[AdCreative</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">object_story_spec]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">object_story_spec</span>
  <span style="color: #f8f8f2">creative</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">remote_create()</span>


  <span style="color: #f8f8f2">ad</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Ad(parent_id</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">account_publicitaire)</span>
  <span style="color: #f8f8f2">ad[Ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">name]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">variable</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&#39; Ad&#39;</span>
  <span style="color: #f8f8f2">ad[Ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">adset_id]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">ad_set[AdSet</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">id]</span>
  <span style="color: #f8f8f2">ad[Ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">tracking_specs]</span> <span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span>
              <span style="color: #e6db74">&#39;action.type&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;offsite_conversion&#39;</span><span style="color: #f8f8f2">,</span>
              <span style="color: #e6db74">&#39;fb_pixel&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">YOURFACEBOOKPIXEL</span>
              <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">ad[Ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Field</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">creative]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;creative_id&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">creative[</span><span style="color: #e6db74">&#39;id&#39;</span><span style="color: #f8f8f2">],</span>
  <span style="color: #f8f8f2">}</span>
  <span style="color: #f8f8f2">ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">remote_create(params</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span>
      <span style="color: #e6db74">&#39;status&#39;</span><span style="color: #f8f8f2">:Ad</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Status</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">active,</span>
  <span style="color: #f8f8f2">})</span>



  <span style="color: #f8f8f2">print(</span><span style="color: #e6db74">&#39;Campaign successfully created, congrats!&#39;</span><span style="color: #f8f8f2">)</span>
  </pre></div>

  <style>

  h2   {
    font-size: 1.4em;
    font-weight:900,
  }
  img {
    width:90%;
    height:auto;
  }

  </style>



  `}
