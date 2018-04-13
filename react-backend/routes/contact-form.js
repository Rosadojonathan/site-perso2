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
router.post("/", function(req, res, next) {
  const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
       <li>Email: ${req.body.email}</li>

     </ul>
       <h3>Message</h3>
       <p>${req.body.message}</p>
     `;
  const mail = {
    from: req.body.email,
    to: "jonathan.emil.rosado@gmail.com",
    subject: "WEBSITE: New Message from " + req.body.name,
    replyTo: req.body.email,
    text: req.body.message,
    html: htmlEmail
  };
  smtpTransport.sendMail(mail, (error, response) => {
    if (error) {
      res.json([console.error]);
    }
    console.log("Mail envoyé avec succès");
    smtpTransport.close();
    res.status(200).send("All is good myfriend");
  });
});

module.exports = router;
