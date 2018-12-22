
const express = require('express');
const router = express.Router();
const models = require('../models');


router.post('/', (req, res) => {
    console.log(req.body)
    htmlContent = req.body.content;
    path = req.body.path.toLowerCase().replace(/\ /g,'-')
    console.log(path);
    models.Post.destroy(

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
    
})


module.exports = router;
