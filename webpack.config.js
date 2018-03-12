const path = require('path')
const webpack = require('webpack')

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
  loaders.push({ loader: 'postcss-loader', options: {
    config: {
      path: './postcss.config.js'
    }
  }})
  if (type)
    loaders.push(type + '-loader')
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
}

module.exports = {
  entry: {
    entry: './client/script.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'script.js'
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
  }
}
