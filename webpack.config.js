var path    = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
