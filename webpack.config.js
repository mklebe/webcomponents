var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new LiveReloadPlugin()
  ],
  module: {
    rules: [{
        test: /\.html$/,
        use: [ {
            loader: 'html-loader',
            options: {
            minimize: true
            }
        }],
    },
    {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
  }
};