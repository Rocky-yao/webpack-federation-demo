const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('./package.json');

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
    filename: '[name].[contentHash].js',
  },
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      remotes: {
        // dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
        mume: 'mume@http://localhost:9090/remoteEntry.js',
        // app3: 'app3@http://localhost:9090/app3RemoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
