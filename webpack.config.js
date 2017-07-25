var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
      './app/index.js',
      './components/mk-section/mk-section.sass'
      ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new LiveReloadPlugin(),
      new ExtractTextPlugin({ // define where to save the file
        filename: 'dist/[name].bundle.css',
        allChunks: true,
      }),
  ],
  module: {
    rules: [{
        test: /\.html$/,
        use: [ {
            loader: 'html-loader',
            options: {
            minimize: true
            }
        },
        { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }],
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    },
    {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }]
  }
};