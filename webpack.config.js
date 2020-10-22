const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    app: path.join(__dirname, '/src/register.js')
  },
  // externals: {
  //   react: './node_modules/@storybook/api/node_modules/react'
  // },
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
  }
}
