const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("./package.json")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "./",
    filename: "[name].[contentHash].js"
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap" // 把整个项目通过dashboard这个别名暴露除去
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
}
