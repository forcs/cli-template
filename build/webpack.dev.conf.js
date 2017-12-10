var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var manifestConfig = require('../manifest')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

if (!manifestConfig.hasOwnProperty('templateDir')) {
  manifestConfig.templateDir = resolve('src/template')
} else if (manifestConfig.templateDir.indexOf('.') !== 0 && manifestConfig.templateDir.indexOf('/') !== 0) {
  manifestConfig.templateDir = resolve(manifestConfig.templateDir)
}

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrorsPlugin()
]

Object.keys(manifestConfig.entry).forEach(function (name) {
  var entryConfig = manifestConfig.entry[name]
  if (!entryConfig.hasOwnProperty('title')) {
    entryConfig.title = name
  }
  if (!entryConfig.hasOwnProperty('template')) {
    entryConfig.template = 'default.html'
  }

  if (entryConfig.template.indexOf('.') !== 0 && entryConfig.template.indexOf('/') !== 0) {
    entryConfig.template = path.join(manifestConfig.templateDir, entryConfig.template)
  }

  plugins.push(new HtmlWebpackPlugin({
      title: entryConfig.title,
      filename: name + '.html',
      template: entryConfig.template,
      chunks: [ name ],
      inject: true
    }))
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: plugins
})
