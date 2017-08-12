const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  entry: {
    app: './src/app/client/index.js',
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
                localIdentName: 'purify_[hash:base64:5]',
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
    new PurifyCSSPlugin({
      styleExtensions: ['.css', '.scss', '.sass', '.less'],
      moduleExtensions: ['.html', '.js'],
      paths: glob.sync(path.join(__dirname, '/src/{*.ejs,components/**/*.js,components/**/**/*.js}')),
      purifyOptions: {
        whitelist: ['*purify*'],
      },
      minimize: true,
    }),
    new webpack.DefinePlugin({
      __DEVTOOLS__: false,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
