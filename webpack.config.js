const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './frontend/instatam.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    }]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins: [
    new CopyWebpackPlugin([
      // relative path is from src
      {
        from: './app/assets/images/favicon.ico'
      }, // <- your path to favicon
    ])
  ]
};