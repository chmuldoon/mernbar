const express = require("express");
// const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const schema = require("./schema/schema");
const db = require("../config/keys").mongoURI;
const app = express();

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use(`/api/tests`, require("../routes/api/tests"))

// const webpackMiddleware = require("webpack-dev-middleware");
// const webpack = require("webpack");
// const webpackConfig = require("../webpack.config.js");
// app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;