const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const prod = (process.env.NODE_ENV === 'prod')

const plugins = [
  new ExtractTextPlugin('css/browser-dead.css'),
  new CopyWebpackPlugin([{ from: './src' }])
]

const loaders = [{
  test: /\.js$/,
  loader: 'babel',
  include: [
    path.resolve(__dirname, 'src')
  ],
  query: {
    presets: ['es2015']
  }
}, {
  test: /(\.css)$/,
  include: [
    path.resolve(__dirname, 'src/css'),
  ],
  loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
}]

const entry = [
  './src/browser-dead.js'
]

if (prod) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  )

  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = {
  entry,
  output: {
    path: './dist',
    filename: 'browser-dead.js'
  },

  module: {
    loaders
  },

  plugins
}
