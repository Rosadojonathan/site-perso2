const sm = require('sitemap');
const models = require('./models');
const fs = require('fs');
const CronJob = require('cron').CronJob;

const job = new CronJob('00 00 00 * * *', function() {
        /*
        * Runs every weekday (Monday through Sunday)
        * at 00:00:00 AM. Midnight...
        */
        generateSitemap();

    }, function () {
        console.error('Cronjob for sitemap stopped');
    },
    true, /* Start the job right now */
    'Europe/Amsterdam' /* Time zone of this job. */
    );

    


function generateSitemap() {

    console.log('Writing sitemap.xml');

    const urls = [
        { url: '/blog'      , changefreq: 'weekly'  , priority: 0.7 },
        { url: '/contact'  , changefreq: 'monthly' , priority: 0.2 },
        { url: '/'  , changefreq: 'monthly' , priority: 0.2 },
        { url: '/cv'  , changefreq: 'weekly' , priority: 0.2 },
        { url: '/projets'  , changefreq: 'weekly' , priority: 0.2 },
    ];

    models.Post.findAll().then((posts) => {
        posts.map(post => {
            urls.push({ url: '/blog/' + post.path, changefreq: 'weekly', priority: 0.4 });
        });

        const sitemap = sm.createSitemap ({
            hostname: 'https://jonathanrosado.fr',
            cacheTime: 600000,  // 600 sec cache period
            urls: urls
        });

        fs.writeFileSync(require('path').resolve(__dirname,'./public/sitemap.xml'), sitemap.toString());
    });

}



