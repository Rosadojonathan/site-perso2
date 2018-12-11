const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const redisClient = require("redis").createClient();

const index = require("./routes/index");
const posts = require("./routes/posts");
const articles = require("./routes/articles");
const contactform = require("./routes/contact-form");
const recaptcha = require("./routes/recaptcha");
const newsletter = require("./routes/newsletter");
const login = require("./routes/login");

const articlesDB = require("./filesystem/articlesDB").articlesDB;

import serverRenderer from './middleware/renderer'

const PORT = 3000;
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);
router.use('*', serverRenderer);
router.use(express.static(path.join(__dirname, "public")));
router.use(express.static("static"));

router.use(express.static(`${__dirname}/../client/website/build`))
app.use(router);

app.listen(PORT, (error) => {
  if (error) {
      return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});
// const limiter = require("express-limiter")(app, redisClient);
// limiter({
//   path: "/",
//   method: "get",
//   lookup: "headers.x-forwarded-for",
//   total: 150,
//   expire: 1000 * 60 * 5
// });

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("static"));
// app.use(express.static(`${__dirname}/../client/website/build`));


// app.use("/api/posts", posts);
// app.use("/api/articles", articles);
// app.use("/api/contactform", contactform);
// app.use("/api/recaptcha", recaptcha);
// app.use("/api/login", login);
// app.use("/api/newsletter", newsletter);
// app.get("/blog/:whatever", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/website/build/index.html"));
// });
// app.use("/robots.txt", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/website/build/robots.txt"));
// });

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/website/build/index.html"));
// });

// app.use(function(req, res, next) {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {

//   res.sendFile(path.join(__dirname, "..client/website/build/index.html"));
// });

module.exports = app;
