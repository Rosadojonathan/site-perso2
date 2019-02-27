const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const logins = require("../admin-credentials.js").logins;
var jwt = require('jsonwebtoken');



router.post("/", function (req, res) {
  const { token } = req.body;
  console.log(req.body)
  // res.send({success:true})
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        console.log('token expired')
        res.send({ tokenExpired: true, success: false })
      }
    }
    else if (decoded.username === logins.username && decoded.password) {
      bcrypt.compare(decoded.password, logins.password, function (err, isMatch) {
        if (err) console.error(err);
        if (isMatch) {
          console.log("it's a match")
          res.send({ success: true });
        }
      });
    } else {
      res.send({ success: false })
    }

  });


}
)

module.exports = router;
