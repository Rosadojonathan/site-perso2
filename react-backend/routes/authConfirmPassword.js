const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const logins = require("../admin-credentials.js").logins;




router.post("/", function(req, res) {
  const { password } = req.body;
console.log(req.body)
  // res.send({success:true})
  if (password) {
    bcrypt.compare(password, logins.password, function(err, isMatch) {
      if (err) console.error(err);
      if (isMatch) {
          console.log("it's a match")
          res.send({ success: true});
      }
    });
  } else {
    res.send({ success: false })}
  }
)

module.exports = router;
