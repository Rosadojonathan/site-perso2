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
app.use(express.static(`${__dirname}/../client/website/build`));
// app.use(
//   require("prerender-node").set("prerenderToken", "ZXkgVzlyxjh1bS5BJ3ck")
// );

app.use("/posts", posts);
app.use("/articles", articles);
app.use("/contactform", contactform);
app.use("/api/recaptcha", recaptcha);
app.use("/api/login", login);
app.use("/newsletter", newsletter);
app.get("/blog/:whatever", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/website/build/index.html"));
});
app.use("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/website/build/robots.txt"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/website/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  //  res.sendFile(path.join(__dirname,'..client/website/build/index.html'));
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  //
  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.sendFile(path.join(__dirname, "..client/website/build/index.html"));
});

module.exports = app;
