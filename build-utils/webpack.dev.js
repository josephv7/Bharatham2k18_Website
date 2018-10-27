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
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
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