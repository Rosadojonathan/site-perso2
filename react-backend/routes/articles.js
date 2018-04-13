var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const assert = require("assert");

//const passwords = require('../credentials').passwords;

const articlesDB = require("../filesystem/articlesDB").articlesDB;

// URL MONGODB
// const url = `mongodb://${passwords.username}:${passwords.password}@ds115729.mlab.com:15729/tech-marketer-db`;

// var articlesDB = [];

// mongo.connect(url,(err,db) => {
//   assert.equal(null,err);
//   var cursor = db.collection('blogposts').find();
//   cursor.forEach(function(doc,err){
//     assert.equal(null,err);
//     resultArray.push(doc);
//   },function(){
//     db.close();
//     let response = articlesDB.find(e => e.id === articleRequired);
//     if (response){
//     res.json([ response ])
//     }
//   })
//
// })

router.get("/:article", function(req, res, next) {
  let articleRequired = req.params.article;
  // FILE SYSTEM MECHANISM

  let response = articlesDB.find(e => e.path === articleRequired);
  if (response) {
    res.json([response]);
  }

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
