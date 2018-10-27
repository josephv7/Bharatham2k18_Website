const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const path = require("path");
const commonPaths = require("./common-paths");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: commonPaths.outputPath,
    port: 3000,
    host: "0.0.0.0",
    useLocalIp: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: commonPaths.root
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin({
      test: /\.ts$/
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new workboxPlugin({
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