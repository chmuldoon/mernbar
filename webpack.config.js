const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || "development";
module.exports = {
  entry: "./client/index.js",
  output: {
    path: "/",
    filename: "bundle.js",
  },
  mode: 'development',
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html",
    }),
  ],
};
