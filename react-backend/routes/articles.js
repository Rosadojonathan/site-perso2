var express = require("express");
var router = express.Router();
const assert = require("assert");

//const passwords = require('../credentials').passwords;

const articlesDB = require("../filesystem/articlesDB").articlesDB;

const models = require('../models');


router.get("/:article", function(req, res, next) {
  let articleRequired = req.params.article;
  console.log(articleRequired)

    models.Post.findOne({
      where: {
        path: articleRequired
      }
    }).then((post) =>{
      if (!post){
        return 'not found';
      }
      console.log('file found')
      return res.json(post.dataValues)
    })

  

  // let response = articlesDB.find(e => e.path === articleRequired);
  // if (response) {
  //   res.json([response]);
  // }


});

module.exports = router;
