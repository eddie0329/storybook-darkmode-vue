const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    app: path.join(__dirname, '/src/register.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    filename: 'register.js',
    path: path.join(__dirname, 'dist')
  },
}
