const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// this is used to help juggle
// Sass, Postcss, and vue template
// style tags
function makeStyleLoader (type) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: true,
      importLoaders: 1,
      name: 'styles/[name].[ext]'
    }
  }
  const loaders = [ cssLoader ]
  loaders.push({
    loader: 'postcss-loader',
    options: {
      config: {
        path: './postcss.config.js'
      }
    }
  })

  if (type) { loaders.push(type + '-loader') }

  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
}

function cwd (file) {
  return path.join(process.cwd(), file || '')
}

module.exports = {
  entry: {
    entry: './client/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'script.js'
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json', '.scss' ],
    alias: {
      root: path.join(__dirname, '../client')
    },
    modules: [
      cwd('node_modules'),
      // this means you can get rid of dot hell
      // for example import 'components/Foo'
      // instead of import '../../components/Foo'
      cwd('client')
    ]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: makeStyleLoader(),
          scss: makeStyleLoader('sass'),
          sass: makeStyleLoader('sass')
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: makeStyleLoader()
    }, {
      test: /\.scss$/,
      use: makeStyleLoader('sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
