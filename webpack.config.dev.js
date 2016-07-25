import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  plugins: [

    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot', 'babel'],
      }, {
        test: /\.(css|scss)$/,
        exclude: /globalStyles/,
        loaders: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass',
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]',
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
      }, {
        test: /\.scss$/,
        include: /globalStyles/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.css$/,
        include: /globalStyles/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        include: /node_modules/,
        loaders: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass',
      }, {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'client/globalStyles/libs/index.scss') + '";',
    includePaths: /client/,
    outputStyle: 'compressed',
    sourceMap: true,
  },
  resolve: {
    modules: ['client', 'server', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.react.js', '.scss'],
    packgageMains: [
      'jsnext:main',
      'main',
    ],
  },
  target: 'web',
  progress: true,
};
