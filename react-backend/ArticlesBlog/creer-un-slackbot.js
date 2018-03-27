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
      font-size: 1em;
    }

    img {
      width:100%;
      height:auto;
    }
  </style>

  <p>Si vous utilisez Slack pour communiquer au sein de votre entreprise vous êtes probablement déjà au courant des possibilités qu'offre cette application en matière de messages automatisés.
  </p>
  <p>Il est très facile de plugger Slack à des applications de IFTTT comme Zapier pour automatiser l'envoi de messages dépendant de déclencheurs simples tels qu'un flux RSS ou des cartes Trello.</p>
  <p>Mais peut-être que vous désirez connecter un élément déclencheur qui n'est pas proposé par votre service d'IFTTT. Heureusement, il est extrêmement simple de créer son propre Slackbot.</p>

  <h2>I) Créer une application Slack</h2>

  <p>Il vous faut d'abord vous rendre sur <a href="https://api.slack.com/apps"> api.slack.com/apps</a></p>
  <p>Cliquez sur Create New App puis renseignez le nom et l'espace de développement de votre app.</p>
  <img src="../images/slack1.jpg" alt="">
  <br>
  <p>Puis activez les Webhooks. On vous demandera ensuite de choisir le channel dans lequel vous souhaitez que votre Slackbot poste des messages. Vous pouvez aussi vous choisir vous même si vous souhaitez effectuer des tests.</p>
  <img src="../images/slack2.jpg" alt="">
  <p>Copiez ensuite l'adresse du Webhook.</p>
  <img style="width:70%" src="../images/slack3.jpg" alt="">
  <br>


  <h2>2) Et maintenant, comment je l'incorpore dans un projet ?</h2>

  <p>Dans mon cas, j'aime bien utiliser des webhooks slacks dans des scripts d'applications Google, comme Google AdWords.</p>
  <p>Je les relie, par exemple, à des scripts qui m'envoient des alertes lorsque les coûts d'acquisition dépassent une certaine somme, lorsque les CTR de mes campagnes sont inférieurs à un certain %, ou bien lorsqu'une de mes fiches produits se retrouve sans stocks. Les possibilités sont presque infinies. Soyez ingénieux !</p>
  <p>Dans un prochain article je détaillerai le code pour avoir ces alertes ainsi que comment ajouter des boutons à ses slackbots pour créer des messages interactifs. Je me suis amusé à rajouter des boutons me permettant de mettre des campagnes publicitaires en pause depuis Slack.</p>

  <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">var</span> <span style="color: #a6e22e">SLACK_WEBHOOK_URL</span> <span style="color: #f92672">=</span> <span style="color: #e6db74">&quot;LE_TOKEN_QUE_VOUS_AVEZ_COPIE_COLLE&quot;</span><span style="color: #f8f8f2">;</span>


 <span style="color: #66d9ef">function</span> <span style="color: #a6e22e">sendSlackMessage</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">text</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">opt_channel</span><span style="color: #f8f8f2">){</span>
   <span style="color: #66d9ef">var</span> <span style="color: #a6e22e">slackMessage</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>

     <span style="color: #a6e22e">icon_url</span><span style="color: #f92672">:</span> <span style="color: #e6db74">&quot;http://www.gstatic.com/images/icons/material/product/1x/adwords_64dp.png&quot;</span><span style="color: #f8f8f2">,</span>
     <span style="color: #a6e22e">username</span><span style="color: #f92672">:</span> <span style="color: #e6db74">&quot;Campaign Alerts&quot;</span><span style="color: #f8f8f2">,</span>
     <span style="color: #a6e22e">as_user</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span>
     <span style="color: #a6e22e">channel</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">opt_channel</span><span style="color: #f8f8f2">,</span>
      <span style="color: #a6e22e">attachments</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">[{</span>
     <span style="color: #e6db74">&quot;color&quot;</span><span style="color: #f92672">:</span> <span style="color: #e6db74">&quot;#008000&quot;</span><span style="color: #f8f8f2">,</span>
       <span style="color: #e6db74">&quot;text&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">text</span><span style="color: #f8f8f2">,</span>
       <span style="color: #e6db74">&quot;mrkdwn_in&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&quot;text&quot;</span><span style="color: #f8f8f2">],</span>
     <span style="color: #f8f8f2">}]</span>
   <span style="color: #f8f8f2">};</span>

   <span style="color: #66d9ef">var</span> <span style="color: #a6e22e">options</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
     <span style="color: #a6e22e">method</span><span style="color: #f92672">:</span> <span style="color: #e6db74">&quot;POST&quot;</span><span style="color: #f8f8f2">,</span>
     <span style="color: #a6e22e">contentType</span><span style="color: #f92672">:</span> <span style="color: #e6db74">&quot;application/json&quot;</span><span style="color: #f8f8f2">,</span>
     <span style="color: #a6e22e">payload</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">JSON</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">stringify</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">slackMessage</span><span style="color: #f8f8f2">),</span>
     <span style="color: #a6e22e">muteHttpExceptions</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f8f8f2">};</span>
       <span style="color: #a6e22e">UrlFetchApp</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">fetch</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">SLACK_WEBHOOK_URL</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">options</span><span style="color: #f8f8f2">);</span>
 <span style="color: #f8f8f2">}</span>


 <span style="color: #a6e22e">sendSlackMessage</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;Ceci est un message d&#39;alerte&quot;</span><span style="color: #f8f8f2">)</span>
 </pre></div>

  <p>Ceci est un petit template pour structurer vos messages, vous n'avez ensuite qu'à appeler la fonction sendSlackMessage dans votre code dès qu'une condition particulière intervient avec le message de votre choix.</p>
  <p>Voici le résultat lorsque je le connecte à mes Google App Scripts AdWords pour être averti de coûts d'acquisition élevés:</p>
  <img style="width:70%" src="../images/slack5.jpg" alt="" />

  <br />
  <br />
  <p>Et voici le résultat pour des Facebook Ads:</p>
  <img style="width:70%" src="../images/slack4.jpg" alt="">
  <p>Dans cet exemple, j'ai connecté mon Slackbot a un script de monitoring des coûts publictaires Facebook Ads. Lorsque les coûts d'acquisition d'une campagne dépassent une certaine somme je reçois automatiquement un ping comportant le nom de la campagne, le groupe d'annonce et le CPA de celle-ci.</p>
  <p>J'ai également rajouté des boutons pour mettre en pause la campagne ou le groupe d'annonces depuis Slack. </p>

  <p>Il y a évidemment plein d'applications possibles, laissez-vous tenter par la facilité d'implémentation de Slackbots. Vous gagnerez du temps. :)</p>

  <p>Si vous souhaitez envoyer des messages depuis node.js la librairie <a href="https://www.npmjs.com/package/slack-webhook">slack-webhook</a> a l'air très simple d'utilisation.</p>


  `
}
