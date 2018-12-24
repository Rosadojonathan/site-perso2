const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const logins = require("../admin-credentials.js").logins;
var jwt = require('jsonwebtoken');

function generateToken(username, password) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  var u = {   
   username: username,
   password: password,
  };
  return token = jwt.sign(u,'shhhhh', {
     expiresIn: 60 * 60 * 3 // expires in 3 hours
  });
}

router.post("/", function(req, res) {
  const { username, password } = req.body;
  // res.send({success:true})
  if (username === logins.username && password) {
    bcrypt.compare(password, logins.password, function(err, isMatch) {
      if (err) {
          throw err
      }
      if (isMatch) {
        token = generateToken(username, password)
        // console.log(token)
        res.send({ success: true, token: token });
      } else {
        res.send({ success: false });
      }
    });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
