var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const passwords = require("../credentials.js").passwordMailer;

const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: passwords.account,
    pass: passwords.password
  }
});

/* GET home page. */
router.get("/:message", function(req, res, next) {
    let incomingMessage = req.params.message;
    console.log('chatbot route')
    // res.setHeader('Content-Type', 'application/json');
    res.json({"response": `I received your message ${incomingMessage}`});

});

module.exports = router;