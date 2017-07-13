const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

module.exports = {
  entry: {
    app: './src/index.js',
    bootstrap: bootstrapEntryPoints.prod,
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
          publicPath: './dist',
        }),
      },
      // Loaders for other file types can go here
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader',
        ],
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimal React Webpack Babel Setup',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      filename: 'index.html',
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: '/css/[name].css',
      allChunks: true,
    }),
  ],
};
