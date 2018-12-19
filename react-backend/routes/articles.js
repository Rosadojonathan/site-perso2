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

  
  // res.json([response]);

  // let response = articlesDB.find(e => e.path === articleRequired);
  // if (response) {
  //   res.json([response]);
  // }

  // mongoose.connect(url,(err,db) => {
  //   assert.equal(null,err);
  //   var cursor = db.collection('blogposts').find();
  //   cursor.forEach(function(doc,err){
  //     assert.equal(null,err);
  //     articlesDB.push(doc);
  //   },function(){
  //     db.close();
  //     let response = articlesDB.find(e => e.id === articleRequired);
  //     if (response){
  //     res.json([ response ])
  //     }
  //   })
  //
  // })
});

module.exports = router;
