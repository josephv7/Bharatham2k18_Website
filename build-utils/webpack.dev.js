const webpack = require("webpack");
const commonPaths = require("./common-paths");

const config = {
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    overlay: true,
    hot: true,
    useLocalIp: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;