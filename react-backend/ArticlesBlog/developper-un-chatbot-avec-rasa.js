module.exports.article = {
    content: `
    <style>

    h2   {
      font-size: 1.4em;
      font-weight: bold,
    }
    h3  {
      font-size: 1.2em;
      font-weight:bold,
    }
    @media screen and (max-width:430px){
    img {
      width:90%;
      height:auto;
    }
    }
    
    </style>


<p> Dans cet article j'explique comment j'ai utilisé une librairie open source de NLU pour créer un chatbot pouvant tourner en local ou sur votre propre serveur.
    </p>
<img src="../images/chatbot.jpg" alt="example de conversation avec le chatbot">
<br>

<p>Lien vers le projet sur <a href="https://github.com/Rosadojonathan/rasa-core-bot">GitHub</a></p>
<p>Lien vers le  <a href="/contact">chatbot sur mon site</a></p>
<h2>Présentation de la Stack RASA</h2>

<p>La Stack <a href="https://rasa.com/">RASA</a> est composée de deux librairies: RASA NLU et RASA Core.</p>
<p>RASA NLU (Natural Language Understanding) est un outil permettant de faire de la classification d'intention et extraction d'entités sur des textes. RASA NLU va donc servir à analyser des éléments textuels et les classifier dans des catégories que nous définissons au préalable (demande de renseignements, de remboursement, etc) ainsi qu'en extraire les entités (noms propres, emails, noms de villes, etc) en se basant sur la sémantique de la phrase.  </p>
<p>RASA Core va nous permettre de construire des flows de conversation grâce aux intents et entités récupérés par RASA NLU.</p>

<p>Le grand avantage de cet outil c'est qu'il est open source. Vous n'avez donc pas à craindre qu'il ne fonctionne plus du jour au lendemain si son éditeur décide d'abandonner le projet. Vous pouvez faire tourner la Stack RASA en local, ce qui vous procure une indépendance appréciée.</p>

<h2>Créer un chatbot</h2>

<p>J'ai cherché à utiliser cette librairie open-source pour réaliser un petit projet de chatbot qui puisse automatiquement répondre à des demandes assez simples. Ensuite, j'ai cherché à le déployer sur mon serveur pour l'implémenter sur mon site.</p>
<ul>
    <li>Répondre à des demandes de contact</li>
    <li>Répondre à quelques questions simples comme "Qu'est ce qu'un Tech Marketer"  ou "fais tu du freelance ?"</li>
    <li>Raconter des blagues...</li>
</ul>
<p>Mon cas pratique étant limité, je n'ai pas exploité pleinement toutes les possibilités qu'offre RASA mais il est assez facile à connecter à des API externes et en profiter pour automatiser des tâches rebutantes comme le remplissage de longs formulaires par exemple.</p>
<p>Des restaurants, comparateurs de prix, ou autres peuvent être intéressés par RASA.</p>
<br>
<p>La documentation de RASA est particulièrement soignée et riche en exemples, ce qui est parfait pour se lancer. Il faut cependant faire attention aux anciennes versions de leurs librairies qui sont toujours bien référencées sur Google lorsqu'on fait des recherches mais qui ne sont pas toujours d'actualité... </p>
<br>
<h3>RASA Core</h3>
<p>Dans un projet qui utilise RASA Core, la partie NLU sera déterminée par deux fichiers</p>
<p>Le fichier nlu_data.md où vous spécificiez les différentes intentions avec des phrases d'exemples, par exemple, ici l'intention question et request_question, et les entités: ici entre crochets pour l'exemple puis entre parenthèses pour l'entité correspondante.</p>
<p>Rasa va identifier le vocabulaire associé à une intention en fonction de la fréquence des mots ainsi que leur fréquence inversée par rapport aux autres intentions. C'est à dire qu'un mot fréquent parmi toutes les intentions n'est pas très utile pour identifier une intention en particulier. Il s'agit probablement d'un mot fréquent. En revanche, un mot fréquent parmi une intention et rare ailleurs est un mot qui vous permettra d'identifier une intention. RASA NLU effectue ces calculus sur l'ensemble des mots et assigne à une phrase la probabilité d'appartenir à chaque intention différente.</p>
<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">## intent:question
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">Tech</span> <span style="color: #B00040">Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">tech</span> <span style="color: #B00040">marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">Tech-Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - kezako un <span style="color: #666666">[</span><span style="color: #B00040">tech-marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">Tech</span> <span style="color: #B00040">Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> au juste <span style="color: #666666">?</span>
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">Tech</span> <span style="color: #B00040">Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> en fait <span style="color: #666666">?</span>
    - c&#39;est quoi ton <span style="color: #666666">[</span><span style="color: #B00040">poste</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - c&#39;est quoi un <span style="color: #666666">[</span><span style="color: #B00040">Technical</span> <span style="color: #B00040">Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - Peux tu m&#39;expliquer ce qu&#39;est un <span style="color: #666666">[</span><span style="color: #B00040">technical</span> <span style="color: #B00040">marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - qu&#39;est ce que c&#39;est un <span style="color: #666666">[</span><span style="color: #B00040">Tech</span> <span style="color: #B00040">Marketer</span><span style="color: #666666">](</span>mon_job<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - qu&#39;est ce que c&#39;est <span style="color: #666666">[</span><span style="color: #B00040">Maestro</span><span style="color: #666666">](</span>mon_entreprise<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - effectues<span style="color: #666666">-</span>tu des missions en <span style="color: #666666">[</span><span style="color: #B00040">freelance</span><span style="color: #666666">](</span>freelance<span style="color: #666666">)</span> <span style="color: #666666">?</span>
    - es tu <span style="color: #666666">[</span><span style="color: #B00040">freelance</span><span style="color: #666666">](</span>freelance<span style="color: #666666">)?</span>
    - fais tu du <span style="color: #666666">[</span><span style="color: #B00040">freelance</span><span style="color: #666666">](</span>freelance<span style="color: #666666">)?</span>
    - est<span style="color: #666666">-</span>ce que tu prends des contrats en <span style="color: #666666">[</span><span style="color: #B00040">freelance</span><span style="color: #666666">](</span>freelance<span style="color: #666666">)?</span>
    
## intent:request_question
    - je voudrais te poser une question
    - je voulais te demander un truc
    - j&#39;ai une petite question
    - j&#39;ai une question
    - je peux te poser une question<span style="color: #666666">?</span>
    - juste pour te demander un truc
    - j&#39;ai encore une question
    - j&#39;ai une autre question
    - je voulais te poser une question
    - j&#39;aimerais en savoir plus sur toi
    </pre></div>
    
    <p>Ainsi que le fichier nlu_tensorflow.md qui va configurer le pipeline de transformation des données textuelles brutes en données exploitables par RASA NLU. Les configurations du pipeline sont bien expliquées dans la <a href="https://rasa.com/docs/nlu/choosing_pipeline/">doc</a> de RASA. </p>

    <!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pipeline:
    - name<span style="color: #008000; font-weight: bold">:</span> <span style="color: #B00040">tokenizer_whitespace</span>
    - name<span style="color: #008000; font-weight: bold">:</span> <span style="color: #B00040">ner_crf</span>
    - name<span style="color: #008000; font-weight: bold">:</span> <span style="color: #B00040">ner_synonyms</span>
    - name<span style="color: #008000; font-weight: bold">:</span> <span style="color: #B00040">intent_featurizer_count_vectors</span>
      token_pattern: (?u)\b\w+\b
    - name<span style="color: #008000; font-weight: bold">:</span> <span style="color: #B00040">intent_classifier_tensorflow_embedding</span>
    language: fr
    </pre></div>


    <br>
    <br>
    <p>La partie "CORE" du chatbot sera régie par les fichiers stories.md et domain.yml qui vont permettre de créer les dialogues.</p>
    <p>Dans le fichier stories.md l'on va décrire les actions à effectuer lorsqu'une intention est détectée. Exemple ici lorsqu'une intention de type "question" est détectée avec des entités comme "mon_job", le bot va appeler l'action -action_simple_answer.</p>

    <!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #408080; font-style: italic">## direct_question_respond_form</span>
<span style="color: #666666">*</span> question{<span style="color: #BA2121">&quot;mon_job&quot;</span><span style="color: #666666">:</span><span style="color: #BA2121">&quot;Tech Marketer&quot;</span>}
<span style="color: #666666">-</span> action_simple_answer
</pre></div>

<p>Toutes les actions, intentions, entités, doivent être décrites dans le fichier domain.yml.</p>

<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">intents:
    - question


    entities:
     - mon_job
     - freelance
    
    slots:
      name:
        <span style="color: #008000">type</span>: text
      question:
        <span style="color: #008000">type</span>: text
        auto_fill: <span style="color: #008000">false</span>
    
    templates: 
      utter_name:
      - text: <span style="color: #BA2121">&quot;Salut, comment t&#39;appelles-tu ?&quot;</span>
      - text: <span style="color: #BA2121">&quot;Hey! A qui ai-je plaisir de m&#39;adresser ?&quot;</span>
      - text: <span style="color: #BA2121">&quot;Coucou! Comment dois-je t&#39;appeler ?&quot;</span>
    
    actions:
    - utter_name
    - utter_greet
    - action_simple_answer
    
    forms:
      - contact_form
      - question_answerer_form
    </pre></div>
    
    <p>Une fois que l'on a rempli ces fichiers, l'on peut entrainer nos modèles sur les données pour créer les dialogues avec ici des commandes make train-nlu et make train-core pour gagner du temps.</p>

    <!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000FF">train-nlu</span><span style="color: #666666">:</span>
	python -m rasa_nlu.train -c nlu_tensorflow.yml --fixed_model_name current --data ./nlu_data.md -o models --project nlu --verbose

<span style="color: #0000FF">train-core</span><span style="color: #666666">:</span>
        python -m rasa_core.train -s ./stories.md -d domain.yml -o models/dialogue -c ./default_config.yml --debug
    </pre></div>
    
    <p>Et enfin make run pour le lancer dans la console et intéragir avec depuis cette dernière ou bien make api pour le rendre accessible par requête HTTP.</p>

<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000FF">run-core</span><span style="color: #666666">:</span>
	python -m rasa_core.run --core models/dialogue --nlu models/nlu/current --debug --endpoints endpoints.yml

<span style="color: #0000FF">run-actions</span><span style="color: #666666">:</span>
	python -m rasa_core_sdk.endpoint --actions actions

<span style="color: #0000FF">run</span><span style="color: #666666">:</span>
	make run-actions&amp;
	make run-core

<span style="color: #0000FF">api</span><span style="color: #666666">:</span>
	 make run-actions&amp;
	 python -m rasa_core.run --enable_api --core models/dialogue --nlu models/nlu/current --cors <span style="color: #BA2121">&#39;*&#39;</span> --endpoints endpoints.yml --debug
</pre></div>


<h2>Déployer le modèle</h2>

<p>Afin de déployer le modèle sur mon VPS chez Digital Ocean, j'ai décidé d'utiliser Docker pour le lancer dans un container et configurer Nginx pour qu'il fasse proxy sur les appels sur ma route /conversations/ depuis mon site vers le port de mon container. </p>

<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">FROM sbneto<span style="color: #666666">/</span>phusion<span style="color: #666666">-</span>python<span style="color: #666666">:3.6</span>
    CMD [<span style="color: #BA2121">&quot;/sbin/my_init&quot;</span>]
    SHELL [<span style="color: #BA2121">&quot;/bin/bash&quot;</span>, <span style="color: #BA2121">&quot;-c&quot;</span>]
    
    RUN apt<span style="color: #666666">-</span>get update <span style="color: #666666">-</span>qq <span style="color: #666666">&amp;&amp;</span> \
      apt<span style="color: #666666">-</span>get install <span style="color: #666666">-</span>y <span style="color: #666666">--</span>no<span style="color: #666666">-</span>install<span style="color: #666666">-</span>recommends \
      build<span style="color: #666666">-</span>essential \
      wget \
      openssh<span style="color: #666666">-</span>client \
      graphviz<span style="color: #666666">-</span>dev \
      pkg<span style="color: #666666">-</span>config \
      git<span style="color: #666666">-</span>core \
      openssl \
      libssl<span style="color: #666666">-</span>dev \
      libffi6 \
      libffi<span style="color: #666666">-</span>dev \
      libpng<span style="color: #666666">-</span>dev \
      curl <span style="color: #666666">&amp;&amp;</span> \
      apt<span style="color: #666666">-</span>get clean <span style="color: #666666">&amp;&amp;</span> \
      rm <span style="color: #666666">-</span>rf <span style="color: #666666">/</span>var<span style="color: #666666">/</span>lib<span style="color: #666666">/</span>apt<span style="color: #666666">/</span>lists<span style="color: #666666">/*</span> <span style="color: #666666">/</span>tmp<span style="color: #666666">/*</span> <span style="color: #666666">/</span>var<span style="color: #666666">/</span>tmp<span style="color: #666666">/*</span> <span style="color: #666666">&amp;&amp;</span> \
      mkdir <span style="color: #666666">/</span>app
    
    WORKDIR <span style="color: #666666">/</span>app
    COPY requirements.txt  .<span style="color: #666666">/</span>
    RUN  pip install <span style="color: #666666">-</span>r requirements.txt
    ADD . .
    EXPOSE <span style="color: #666666">5005</span>
    
    CMD [<span style="color: #BA2121">&quot;make&quot;</span>,<span style="color: #BA2121">&quot;api&quot;</span>]
    </pre></div>

    
<p>Configuration Nginx</p>

<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">server</span> {
    <span style="color: #008000; font-weight: bold">listen</span> <span style="color: #666666">443</span> <span style="color: #BA2121">ssl</span> <span style="color: #BA2121">http2</span> <span style="color: #BA2121">default_server</span>;
    <span style="color: #008000; font-weight: bold">listen</span> <span style="color: #BA2121">[::]:443</span> <span style="color: #BA2121">ssl</span> <span style="color: #BA2121">http2</span> <span style="color: #BA2121">default_server</span>;


    <span style="color: #008000; font-weight: bold">ssl_certificate</span> <span style="color: #BA2121">/etc/letsencrypt/live/jonathanrosado.fr/fullchain.pem</span>;
    <span style="color: #008000; font-weight: bold">ssl_certificate_key</span> <span style="color: #BA2121">/etc/letsencrypt/live/jonathanrosado.fr/privkey.pem</span>;

    <span style="color: #008000; font-weight: bold">server_name</span> <span style="color: #BA2121">jonathanrosado.fr</span>;

    <span style="color: #008000; font-weight: bold">root</span> <span style="color: #BA2121">/root/site-perso2/client/website/build</span>;
    <span style="color: #008000; font-weight: bold">index</span> <span style="color: #BA2121">index.html</span>;

    <span style="color: #008000; font-weight: bold">location</span> <span style="color: #BA2121">/conversations/</span> {
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">X-Real-IP</span> <span style="color: #19177C">$remote_addr</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">X-Forwarded-For</span> <span style="color: #19177C">$proxy_add_x_forwarded_for</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">X-Forwarded-For</span> <span style="color: #19177C">$proxy_add_x_forwarded_for</span>;
        <span style="color: #008000; font-weight: bold">proxy_pass</span> <span style="color: #BA2121">http://127.0.0.1:5005</span>;
        <span style="color: #008000; font-weight: bold">proxy_ssl_session_reuse</span> <span style="color: #880000">off</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">Host</span> <span style="color: #19177C">$http_host</span>;
        <span style="color: #008000; font-weight: bold">proxy_redirect</span> <span style="color: #880000">off</span>;

    }
    <span style="color: #008000; font-weight: bold">location</span> <span style="color: #BA2121">/</span> {
        <span style="color: #008000; font-weight: bold">proxy_pass</span> <span style="color: #BA2121">http://127.0.0.1:1337</span>;
        <span style="color: #008000; font-weight: bold">proxy_http_version</span> <span style="color: #666666">1</span><span style="color: #BA2121">.1</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">Upgrade</span> <span style="color: #19177C">$http_upgrade</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">Connection</span> <span style="color: #BA2121">&#39;upgrade&#39;</span>;
        <span style="color: #008000; font-weight: bold">proxy_set_header</span> <span style="color: #BA2121">Host</span> <span style="color: #19177C">$host</span>;
        <span style="color: #008000; font-weight: bold">proxy_cache_bypass</span> <span style="color: #19177C">$http_upgrade</span>;
        <span style="color: #008000; font-weight: bold">try_files</span> <span style="color: #19177C">$uri</span> <span style="color: #BA2121">@prerender</span>;
    }
</pre></div>

<br>

<h3>Afficher le chatbot</h3>
<p>Enfin, pour l'interface graphique du chatbot j'ai utilisé un package React nommé <a href="https://github.com/Wolox/react-chat-widget/issues">React Chat Widget</a> dont j'ai customisé le CSS pour qu'il s'intègre avec le design de mon site.
Ce package permet de gérer facilement l'affichage des messages et réponses de l'utilisateur. </p>
<p>Pour poursuivre ce projet, je pourrais intégrer une logique de reprise du flux de la conversation par un humain, pour pouvoir par exemple répondre directement dans le chatbot.</p>


    `
}