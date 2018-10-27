const webpack = require("webpack");

const config = {
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    overlay: true,
    hot: true,
    useLocalIp: true,
    historyApiFallback: true,
    contentBase: 'src/',
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", 
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;