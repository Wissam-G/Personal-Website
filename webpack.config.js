const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [ './src/app.js' ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    // Automatically compile when files change.
    watch: true,
  // Automatically reload the page when compilation is done.
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    stats: "errors-only",
    open: true
  },
   // Add sass-loader
   module: {
    rules: [ 
    {
      test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ 
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      include: [
      path.resolve(__dirname, "assest/fonts")
      ],
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
        outputPath: 'fonts/'
      }
    }, {
      test: /\.(jpg|png|svg)$/,
      include: [
      path.resolve(__dirname, "src/images")
      ],
      use: [
      'file-loader?name=[name].[ext]?[hash]&outputPath=images/',
      'image-webpack-loader'
      ]
    },
    {
      test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,loader: "imports-loader?this=>window"
    }
    ]
  },
  node: {
      fs: "empty" // avoids error messages
    },
    devtool: "source-map",
    plugins: [
/*    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: {
        target: "http://localhost:3000",
        ws: true
      }
    }),*/
    ]
  };
