const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('client/build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }, 
          'postcss-loader'
        ] 
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 },
          }
        ]
      }
    ],
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/public/index.html',
      filename: './index.html'
    })
  ]
};