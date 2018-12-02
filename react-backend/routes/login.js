const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const logins = require("../admin-credentials.js").logins;

router.post("/", function(req, res) {
  const { username, password } = req.body;
  res.send({success:true})
  // if (username === logins.username && password) {
  //   bcrypt.compare(password, logins.password, function(err, isMatch) {
  //     if (err) throw err;
  //     if (isMatch) {
  //       res.send({ success: true });
  //     }
  //   });
  // } else {
  //   res.send({ success: false });
  // }
});

module.exports = router;
