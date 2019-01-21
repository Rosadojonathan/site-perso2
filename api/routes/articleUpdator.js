
const express = require('express');
const router = express.Router();
const fs = require('fs');
const models = require('../models');


router.post('/', (req, res) => {
    console.log(req.body)
    htmlContent = req.body.content;
    path = req.body.path.toLowerCase().replace(/\ /g,'-')
    console.log(path);
    models.Post.update(
        {  
            title: req.body.title,
            description: req.body.description,
            content: htmlContent,
            image: req.body.image_link,
        },
        {
            where: {
                path: req.body.path
            }
        }   
    )
    .then(() => {
        res.send({response:'ok'});
    })
    .catch((err) => {
        console.log(err)
    })

    req.body.filename && 
    fs.writeFile('./ArticlesBlog/' + req.body.filename + '.html', htmlContent, (err) => {
    if (err) console.error(err);
    console.log('Saved html file');
    })
    
})


module.exports = router;
