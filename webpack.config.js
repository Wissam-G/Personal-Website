var path    = require('path');
var webpack = require('webpack');
var Clean   = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

var jsBuildPath = path.resolve(__dirname, 'build');

var config = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    publicPath: '/dist/',
    path: jsBuildPath,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
/*      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader')
      },*/
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=5120'
      }
    ]
  },
  resolve: {
      alias: {
         mods: path.resolve(__dirname, 'js', 'mods'),
         css: path.resolve(__dirname, 'css'),
         pics: path.resolve(__dirname, 'pics'),
       }
  },
  devtool: 'source-map',
/*  plugins: [
    new Clean([jsBuildPath]),
    new ExtractTextPlugin('dist/[name].css')
  ]*/
};

module.exports = config;