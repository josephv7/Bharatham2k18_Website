const path = require("path");
const commonPaths = require("./common-paths");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    main: "./src/index.js",
    registration: "./src/js/registration.js",
    login: "./src/js/login.js"
  },
  output: {
    filename: "[hash].[name].bundle.js",
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /.ts?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"]
    }),
    new htmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login"]
    }),
    new htmlWebpackPlugin({
      filename: "registration.html",
      template: "./src/registration.html",
      chunks: ["registration"]
    })
  ]
};

module.exports = config;
