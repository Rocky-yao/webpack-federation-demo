const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("./package.json")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:9090/",
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[contenthash].js',

  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  devServer: {
    port: 9090,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "all",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0,// This is example is too small to create commons chunks
          test: /[\\/]node_modules[\\/]/,
          name (module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
        }
      }
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
      name: "mume",
      filename: "remoteEntry.js",
      exposes: {
        "./MumeApp": "./src/app3"
      },
      remotes: {
        // core: 'core@http://localhost:9000/remoteEntry.js'
      },
      shared: {
        ...packageJson.dependencies,
        vue: {
          singleton: true,
          requiredVersion: packageJson.dependencies["vue"],
        },
        vuex: {
          singleton: true,
          requiredVersion: packageJson.dependencies["vuex"],
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
}
