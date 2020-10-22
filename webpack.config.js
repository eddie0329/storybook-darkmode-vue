const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    app: path.join(__dirname, '/src/register.js'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'register.js',
    path: path.join(__dirname, 'dist'),
    library: pkg.name,
    libraryTarget: 'commonjs2',
  },
};
