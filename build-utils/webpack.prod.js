const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
workboxPlugin = require('workbox-webpack-plugin');
const path = require("path");
const commonPaths = require("./common-paths");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: commonPaths.root
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new workboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: path.join(commonPaths.outputPath, "sw.js")
    }),
    new CopyWebpackPlugin([
      {
        from: commonPaths.public,
        to: commonPaths.outputPath,
        ignore: ["index.html"]
      }
    ])
  ]
};