const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendor: ['react', 'react-dom', 'bootstrap/dist/css/bootstrap.css', 'bootstrap', 'jquery', 'popper.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 3 versions', 'ie > 8'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[folder]__[local]',
              camelCase: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 3 versions', 'ie > 8'],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: 'true',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 10,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      chunks: ['app', 'vendor'],
    }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:8080/',
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
