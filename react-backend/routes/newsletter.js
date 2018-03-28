var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;


const passwords = require('../mongo-credentials.js').passwordMongo;

const url = `mongodb://${passwords.user}:${passwords.password}@ds115729.mlab.com:15729/tech-marketer-db`;







router.post('/', function(req, res, next) {

  const article = req.body.currentArticle;
  const email = req.body.email;

  mongo.connect(url, (err,db) => {
    if (err) throw err;

    var collection = db.collection('newsletter')

    collection.insert({email:email,article:article})

    console.log('user added to newsletter db')
    



  })


    res.sendStatus(200).send('all ok');


});



module.exports = router;
