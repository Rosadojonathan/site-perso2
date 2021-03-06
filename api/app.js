require('dotenv').config()
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const index = require("./routes/index");
const posts = require("./routes/posts");
const articles = require("./routes/articles");
const contactform = require("./routes/contact-form");
const recaptcha = require("./routes/recaptcha");
const newsletter = require("./routes/newsletter");
const login = require("./routes/login");
const auth = require("./routes/auth");
const authConfirmPassword = require("./routes/authConfirmPassword");
const articleCreator = require('./routes/articleCreator');
const articleUpdator = require('./routes/articleUpdator');
const articleDestroyer = require('./routes/articleDestroyer');


const articlesDB = require("./filesystem/articlesDB").articlesDB;


const app = express();
// const limiter = require("express-limiter")(app, redisClient);
// limiter({
//   path: "/",
//   method: "get",
//   lookup: "headers.x-forwarded-for",
//   total: 150,
//   expire: 1000 * 60 * 5
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("static"));
app.use(express.static(`${__dirname}/../client/app/build`));
// app.use(
//   require("prerender-node").set("prerenderToken", "ZXkgVzlyxjh1bS5BJ3ck")
// );

app.use('/api/article-creator', articleCreator);
app.use('/api/article-updator', articleUpdator);
app.use('/api/article-destroyer', articleDestroyer);
app.use('/api/auth', auth);
app.use('/api/auth-confirm-password', authConfirmPassword);
app.use("/api/posts", posts);
app.use("/api/articles", articles);
app.use("/api/contactform", contactform);
app.use("/api/recaptcha", recaptcha);
app.use("/api/login", login);
app.use("/api/newsletter", newsletter);
app.get("/blog/:whatever", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/app/build/index.html"));
});
app.use("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/app/build/robots.txt"));
});

app.use('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(path.join(__dirname, "./public/sitemap.xml"))
})

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/app/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  //  res.sendFile(path.join(__dirname,'..client/app/build/index.html'));
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  //
  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.sendFile(path.join(__dirname, "..client/app/build/index.html"));
});


module.exports = app;
