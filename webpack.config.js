module.exports = (env, options) => {
  const path = require('path')

  const HtmlWebpackPlugin = require('html-webpack-plugin')

  const VueLoaderPlugin = require('vue-loader/lib/plugin')


  const MiniCssExtractPlugin = require("mini-css-extract-plugin")


  const devMode = options.mode !== 'production'
  console.log(`当前config是：${options.mode}`)

  return {
    context: __dirname,
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.(le|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      }, {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }, {
        test: /\.vue$/,
        use: ['vue-loader']
      }, {
        //https://webpack.docschina.org/configuration/module/#rule-type
        test: /\.json$/i,
        type: 'javascript/auto',
        loader: 'json-loader'
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      })
    ],
    // development server options
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js',
        '@': path.resolve('src')
      }
    }
  }
}