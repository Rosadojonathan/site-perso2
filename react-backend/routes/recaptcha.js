var express = require('express');
var router = express.Router();
const request = ('request');
const recaptcha = require('../recaptcha-credentials.js').recaptcha;


router.get('/', function(req, res, next) {


  if (
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
  ){
    return res.json({"success":false});
  }

  const secretKey = recaptcha.secret_key;
  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.recaptcha}&remoteip=${req.connection.remoteAddress}`;

  request(verifyUrl, (err,res,body) => {
    body = JSON.parse(body);

    // if not successful
    if(body.success !== undefined && !body.success){
      return res.json({"success":false})
    }
    return res.json({"success":true})
  } )
});

module.exports = router;
