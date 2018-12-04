const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: ['url-loader']
    },{
      test:/\.vue$/,
      use:['vue-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new VueLoaderPlugin()
  ],
  // development server options
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};