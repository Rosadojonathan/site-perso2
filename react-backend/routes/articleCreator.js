
const express = require('express');
const router = express.Router();
const fs = require('fs');
const models = require('../models');


router.post('/', (req, res) => {
    console.log(req.body)
    console.log(models.post)
    htmlContent = req.body.content;
    models.Post.create({
        path: req.body.path,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        image: req.body.image_link,
        createdAt: req.body.date
    }).then((data) => {
        res.send({response:'ok'});
    })
    .catch((err) => {
        console.log(err)
    })
    // fs.writeFile('./ArticlesBlog/hello.html', htmlContent, (err) => {
    // if (err) console.error(err);
    // console.log('Saved');
    // })
    
})


module.exports = router;
