module.exports.article = {
    content: `
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

    <p>L'analyse de sentiments de commentaires de publicités Facebook permet au Marketer de garder une vision globale sur la réception de ses publicités par son audience.
    Il s'agit d'une métrique importante car si de nombreux commentaires négatifs sont laissés non-traités la situation peut nuire à votre capacité de conversion de prospects.
    </p>
    <img src="../images/analyse-de-sentiments.jpg" alt="analyse-de-sentiments">
    <br>

    <p>Lien vers le projet sur <a href="https://github.com/Rosadojonathan/facebook-ads-sentiment-grapher">GitHub</a></p>

    
    <h2>1) Récupérer des commentaires de publicités Facebook</h2>
    <p>Dans un premier temps, il est nécessaire d'avoir une application Facebook avec les permissions "Ads Management".

       J'ai uniquement cherché à récupérer les commentaires des groupes d'annonces actifs pour cette application, mais il est évidemment possible de récupérer les commentaires de publicités inactives.
    </p>

    <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">params</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #e6db74">&#39;level&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&#39;ad&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&#39;filtering&#39;</span><span style="color: #f8f8f2">:[</span>
        <span style="color: #f8f8f2">{</span><span style="color: #e6db74">&quot;field&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;adset.delivery_info&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;operator&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;IN&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;value&quot;</span><span style="color: #f8f8f2">:[</span><span style="color: #e6db74">&quot;active&quot;</span><span style="color: #f8f8f2">]}],</span>
        <span style="color: #e6db74">&#39;time_range&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #e6db74">&#39;since&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">start_time,</span>
        <span style="color: #e6db74">&#39;until&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">end_time,</span>
        <span style="color: #f8f8f2">}</span>
    <span style="color: #f8f8f2">}</span>
    <span style="color: #f8f8f2">fields</span> <span style="color: #f92672">=</span>  <span style="color: #f8f8f2">{</span>
        <span style="color: #e6db74">&#39;campaign_name&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&#39;adset_name&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&#39;ad_id&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #f8f8f2">}</span>
    </pre></div>
    
    <p>
    L'idée de base est d'itérer sur les groupes d'annonces actifs d'un compte publicitaire pour récupérer les id des annonces. 
    Ensuite, il va falloir récupérer l'effective_object_story_id d'une annonce, car ce n'est pas l'id de l'annonce en lui même qui nous permettra de récupérer les commentaires.
    </p>
    <p>En effet, l'effective_object_story_id correspond à l'id de la page à partir de laquelle vous faîtes une publicité + l'id du post de la publicité, qui est différent de celui de l'annonce. </p>
    <p>Pour obtenir l'effective_object_story_id à partir d'un id d'annonce, il est nécessaire d'utiliser l'API Graph</p>

    <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">page_id_post_id_fetcher</span><span style="color: #f8f8f2">(ad_id):</span>
        <span style="color: #e6db74">&quot;&quot;&quot;</span>
        <span style="color: #e6db74">    pass ad_id to fetch page_id_post_id which is needed to fetch the comments from a Facebook post or ad</span>
        <span style="color: #e6db74">    &quot;&quot;&quot;</span>
            <span style="color: #66d9ef">try</span><span style="color: #f8f8f2">:</span>
                <span style="color: #f8f8f2">s</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">requests</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get(</span><span style="color: #e6db74">&#39;https://graph.facebook.com/v3.1/&#39;</span><span style="color: #f92672">+</span> <span style="color: #f8f8f2">ad_id</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&#39;?fields=creative{effective_object_story_id}&amp;access_token=&#39;</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">access_token)</span>
            <span style="color: #66d9ef">except</span> <span style="color: #a6e22e">Exception</span><span style="color: #f8f8f2">:</span>
                <span style="color: #f8f8f2">exception_catcher(</span><span style="color: #e6db74">&#39;/facebook_ads_comments_analyzer/&#39;</span><span style="color: #f8f8f2">)</span>
            <span style="color: #f8f8f2">s</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">s</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">json()</span>
            <span style="color: #66d9ef">print</span><span style="color: #f8f8f2">(s)</span>
            <span style="color: #66d9ef">print</span><span style="color: #f8f8f2">(s[</span><span style="color: #e6db74">&#39;creative&#39;</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;effective_object_story_id&#39;</span><span style="color: #f8f8f2">])</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">s[</span><span style="color: #e6db74">&#39;creative&#39;</span><span style="color: #f8f8f2">][</span><span style="color: #e6db74">&#39;effective_object_story_id&#39;</span><span style="color: #f8f8f2">]</span>
        </pre></div>
    <br>
    <p>Une fois l'effective_object_story_id obtenu, récupérer les commentaires d'une annonce est un jeu d'enfant. </p>

    <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">comment_fetcher</span><span style="color: #f8f8f2">(page_id_post_id):</span>
        <span style="color: #e6db74">&quot;&quot;&quot;</span>
        <span style="color: #e6db74">    pass page-id_post-id to fetch comments</span>
        <span style="color: #e6db74">    &quot;&quot;&quot;</span>
            <span style="color: #66d9ef">try</span><span style="color: #f8f8f2">:</span>
                <span style="color: #f8f8f2">comments</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">graph</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">get_connections(id</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">page_id_post_id,connection_name</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;comments&#39;</span><span style="color: #f8f8f2">)</span>
            <span style="color: #66d9ef">except</span> <span style="color: #a6e22e">Exception</span><span style="color: #f8f8f2">:</span>
                <span style="color: #f8f8f2">exception_catcher(</span><span style="color: #e6db74">&#39;/facebook_ads_comments_analyzer/&#39;</span><span style="color: #f8f8f2">)</span>
        
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">comments</span>
        </pre></div>
        
    <h2>Analyser les sentiments d'un commentaire </h2>

    <p>Pour analyser la polarité sentimentale j'ai utilisé la librairie <a href="https://github.com/cjhutto/vaderSentiment">VADER</a> qui est une librairie Python spécialisée dans l'analyse de sentiments venant des réseaux sociaux.
        Elle est capable d'interpréter les phrases contenant des emojis (sauf ceux de Facebook, on y reviendra...), les usages de la ponctuation (ex: !!! ou ???),etc et leur assigner une émotion positive ou négative. Cela fait qu'elle est
        parfaitement adaptée à l'exploitation de données des réseaux sociaux.
        Cette libraire a été entraînée par des milliers d'humains grâce à Amazon Mechanical Turk. 
        Cependant, elle n'opère que sur des phrases en anglais pour l'instant. Ce n'est pas très grave puisqu'on peut facilement utiliser une API de traduction en ligne (comme DeepL) pour traduire des commentaires du français vers l'anglais. </p>

        <!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">from</span> <span style="color: #f8f8f2">vaderSentiment.vaderSentiment</span> <span style="color: #f92672">import</span> <span style="color: #f8f8f2">SentimentIntensityAnalyzer</span>
<span style="color: #f92672">import</span> <span style="color: #f8f8f2">pydeepl</span>

<span style="color: #f8f8f2">analyzer</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">SentimentIntensityAnalyzer()</span>



<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">translate_to_english</span><span style="color: #f8f8f2">(func):</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">translate_sentence</span><span style="color: #f8f8f2">(sentence):</span>
        <span style="color: #f8f8f2">translation</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">pydeepl</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">translate(sentence,</span> <span style="color: #e6db74">&quot;EN&quot;</span><span style="color: #f8f8f2">)</span>
        <span style="color: #75715e">#print(&quot;Original sentence :&quot;, sentence)</span>
        <span style="color: #75715e">#print(&quot;Translated Sentence :&quot;, translation)</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">translation</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">translate_sentence</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">analyzeSentiment</span><span style="color: #f8f8f2">(sentence):</span>
    <span style="color: #f8f8f2">snt</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">analyzer</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">polarity_scores(sentence)</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">snt</span>

<span style="color: #a6e22e">@translate_to_english</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">get_sentence</span><span style="color: #f8f8f2">(sentence):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">sentence</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">sentimentAnalyzer</span><span style="color: #f8f8f2">(sentence):</span>
    <span style="color: #f8f8f2">sentence</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">get_sentence(sentence)</span>
    <span style="color: #f8f8f2">snt</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">analyzeSentiment(sentence)</span>
    <span style="color: #75715e">#print(&quot;\n Sentiments : {}&quot;.format(str(snt)))</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">snt</span>
</pre></div>

<p>Pour chaque phrase analysée, elle renvoie une mesure de polarité positive, négative, neutre et globale </p>
<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">{</span><span style="color: #e6db74">&#39;pos&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0.746</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;compound&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0.8316</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;neu&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0.254</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;neg&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0.0</span><span style="color: #f8f8f2">}</span>
</pre></div>

<p>L'idée ici est de compter le nombre de commentaires globalement positifs ou négatifs pour une annonce afin de pouvoir les représenter visuellement.</p>

<h2>Représentation visuelle des données</h2>

<p>Afin d'avoir une interface interactive j'ai employé la prometteuse librairie Python nommée <a href="https://plot.ly/products/dash/">Dash</a> développée par plot.ly. Dash est une combinaison de
Plotly.js, React et Flask pour créer des applications réactives en Python.</p>

<p>Dash permet de créer très rapidement des mécaniques relativement complexes comme des Dropdowns, Tabs, ou autres avec un affichage instantané des données grâce à des callbacks</p>

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">app</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">layout</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(children</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span>
    <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;target&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #f8f8f2">className</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;container&#39;</span><span style="color: #f8f8f2">),</span>
    <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">H1(children</span><span style="color: #f92672">=</span><span style="color: #e6db74">&quot;Ads Sentiment Analyzer&quot;</span><span style="color: #f8f8f2">,className</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;container&#39;</span><span style="color: #f8f8f2">,style</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span><span style="color: #e6db74">&quot;margin-top&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;25px&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&quot;margin-bottom&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;25px&quot;</span><span style="color: #f8f8f2">}),</span>
    <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(</span>
        <span style="color: #f8f8f2">dcc</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Dropdown(</span>
        <span style="color: #f8f8f2">id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;ad-dropdown&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #f8f8f2">options</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">get_dropdown_list(df),</span>
        <span style="color: #f8f8f2">style</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span><span style="color: #e6db74">&#39;margin-bottom&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;35px&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;margin-left&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;auto&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;margin-right&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;auto&quot;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&quot;width&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;1000px&quot;</span><span style="color: #f8f8f2">},</span>
        <span style="color: #f8f8f2">value</span><span style="color: #f92672">=</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)),</span>  
    <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;output&#39;</span><span style="color: #f8f8f2">,className</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;container&#39;</span><span style="color: #f8f8f2">),</span>
    
    <span style="color: #f8f8f2">])</span>
</pre></div>

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #a6e22e">@app.callback</span><span style="color: #f8f8f2">(</span>
    <span style="color: #f8f8f2">Output(component_id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;output&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">component_property</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;children&#39;</span><span style="color: #f8f8f2">),</span> 
    <span style="color: #f8f8f2">[Input(component_id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;ad-dropdown&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">component_property</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;value&#39;</span><span style="color: #f8f8f2">)])</span>
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">update_graph</span><span style="color: #f8f8f2">(value):</span>
    <span style="color: #f8f8f2">data</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span>
        <span style="color: #f8f8f2">{</span>
            <span style="color: #e6db74">&#39;values&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">get_polarity_counts(df)[int(value)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span>
            <span style="color: #e6db74">&#39;type&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;pie&#39;</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;marker&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
                <span style="color: #e6db74">&quot;colors&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;rgb(178,34,34)&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;rgb(107,142,35)&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;rgb(119,136,153)&#39;</span><span style="color: #f8f8f2">]</span>
            <span style="color: #f8f8f2">},</span>
            <span style="color: #e6db74">&quot;hole&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f92672">.</span><span style="color: #ae81ff">5</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;labels&quot;</span><span style="color: #f8f8f2">:[</span><span style="color: #e6db74">&#39;Negative comments&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;Positive comments&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;Neutral comments&#39;</span><span style="color: #f8f8f2">],</span>
            <span style="color: #e6db74">&quot;textfont&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
                <span style="color: #e6db74">&quot;size&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">18</span>
            <span style="color: #f8f8f2">},</span>
            <span style="color: #e6db74">&#39;textposition&#39;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&#39;inside&#39;</span><span style="color: #f8f8f2">,</span>

        <span style="color: #f8f8f2">},</span>
    <span style="color: #f8f8f2">]</span>

    <span style="color: #f8f8f2">graphs</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[]</span>

    <span style="color: #f8f8f2">graphs</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div([</span>
        <span style="color: #f8f8f2">dcc</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Graph(</span>
            <span style="color: #f8f8f2">id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&#39;graph&#39;</span><span style="color: #f8f8f2">,</span>
            <span style="color: #f8f8f2">figure</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span>
                <span style="color: #e6db74">&#39;data&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">data,</span>
                <span style="color: #e6db74">&#39;layout&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
                    <span style="color: #e6db74">&#39;margin&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
                        <span style="color: #e6db74">&#39;l&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">30</span><span style="color: #f8f8f2">,</span>
                        <span style="color: #e6db74">&#39;r&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
                        <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">30</span><span style="color: #f8f8f2">,</span>
                        <span style="color: #e6db74">&#39;t&#39;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">0</span>
                    <span style="color: #f8f8f2">},</span>
                <span style="color: #e6db74">&quot;annotations&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">[</span>
                    <span style="color: #f8f8f2">{</span>
                        <span style="color: #e6db74">&quot;font&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">{</span>
                            <span style="color: #e6db74">&quot;size&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">20</span>
                        <span style="color: #f8f8f2">},</span>
                        <span style="color: #e6db74">&quot;showarrow&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">False,</span>
                        <span style="color: #e6db74">&quot;text&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #f8f8f2">str(reduce(</span><span style="color: #66d9ef">lambda</span> <span style="color: #f8f8f2">x,</span> <span style="color: #f8f8f2">y:</span> <span style="color: #f8f8f2">x</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">y,</span> <span style="color: #f8f8f2">get_polarity_counts(df)[int(value)</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]))</span> <span style="color: #f92672">+</span> <span style="color: #e6db74">&quot; Comments&quot;</span><span style="color: #f8f8f2">,</span>
                        <span style="color: #f8f8f2">}</span>
                    <span style="color: #f8f8f2">]</span>
                    <span style="color: #f8f8f2">}</span>
                    <span style="color: #f8f8f2">}</span>
                <span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">]))</span>

    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(fetch_negative_comments(df,</span> <span style="color: #f8f8f2">value)[:</span><span style="color: #ae81ff">3</span><span style="color: #f8f8f2">])):</span>
        <span style="color: #f8f8f2">graphs</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(children</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span>
            <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">P(</span>
                <span style="color: #f8f8f2">id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&quot;text-area-neg&quot;</span><span style="color: #f8f8f2">,</span>
                <span style="color: #f8f8f2">children</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">fetch_negative_comments(df,value)[i],</span>
                <span style="color: #f8f8f2">style</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span> 
                <span style="color: #e6db74">&quot;color&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;rgb(178,34,34)&quot;</span>     
                    <span style="color: #f8f8f2">},</span>

            <span style="color: #f8f8f2">)</span>
        <span style="color: #f8f8f2">]))</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(fetch_positive_comments(df,</span> <span style="color: #f8f8f2">value)[:</span><span style="color: #ae81ff">3</span><span style="color: #f8f8f2">])):</span>
            <span style="color: #f8f8f2">graphs</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(children</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">[</span>
                <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">P(</span>
                    <span style="color: #f8f8f2">id</span><span style="color: #f92672">=</span><span style="color: #e6db74">&quot;text-area-pos&quot;</span><span style="color: #f8f8f2">,</span>
                    <span style="color: #f8f8f2">children</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">fetch_positive_comments(df,value)[i],</span>
                    <span style="color: #f8f8f2">style</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">{</span> 
                    <span style="color: #e6db74">&quot;color&quot;</span><span style="color: #f8f8f2">:</span><span style="color: #e6db74">&quot;rgb(107,142,35)&quot;</span>     
                        <span style="color: #f8f8f2">},</span>

                <span style="color: #f8f8f2">)</span>
            <span style="color: #f8f8f2">]))</span>

   
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">html</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">Div(graphs)</span>
</pre></div>

<p>L'on voit facilement que la logique de Dash n'est pas évidente et que la courbe d'apprentissage est bien présente. Certaines choses "simples" sont parfois compliquées à mettre en place lorsque la documentation n'est pas très claire, comme l'utilisation de boutons...</p>
<img src="../images/sentiment-grapher.gif" alt="sentiment-grapher">

    
    
    `

}