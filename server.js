"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const probe = require('pmx').probe();
// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use('/scripts2', express.static(__dirname + '/node_modules/lightbox2/dist/js/'));
app.use('/styles2', express.static(__dirname + '/node_modules/lightbox2/dist/css/'));
app.use('/images', express.static(__dirname + '/node_modules/lightbox2/dist/images/'));



// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/fall", (req, res) => {
  res.render("index_fall_winter");
});
app.get("/spring", (req, res) => {
  res.render("index_spring_summer");
});

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// //key metrics usage
// var counter = 0;

// var metric = probe.metric({
//   name    : 'Realtime user',
//   value   : function() {
//     return counter;
//   }
// });

// setInterval(function() {
//   counter++;
// }, 100);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
