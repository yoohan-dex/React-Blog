import path from 'path';
import webpack from 'webpack';

import postcssReporter from 'postcss-reporter';
import cssnext from 'postcss-cssnext';
export default (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.scss$/,
      loaders: options.cssLoaders,
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
      loader: 'url-loader?limit=50000&name=[path][name].[ext]',
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'url-loader',
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },
  sassLoader: {
    data: `@import "${path.resolve(__dirname, 'client/globalStyles/libs/index.scss')}";`,
    includePaths: /client/,
    outputStyle: 'compressed',
    sourceMap: true,
  },
  plugins: options.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  postcss: [
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
  resolve: {
    modules: ['client', 'server', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.react.js', '.scss'],
    packgageMains: [
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true,
});
