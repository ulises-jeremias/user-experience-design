const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const commonPaths = require('./common-paths')

const URL_BASE = 'https://ulises-jeremias.github.io/'

const config = {
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputServerPath,
    publicPath: '/'
  },
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new TerserWebpackPlugin({
      sourceMap: true
    }),
    new CleanWebpackPlugin({
      root: commonPaths.root
    }),
    new CopyWebpackPlugin([
      {
        from: commonPaths.template,
        to: commonPaths.templatesOutputServerPath,
        transform: content => {
          return Buffer.from(
            content.toString()
              .replace('<!-- base -->', `<base href="${URL_BASE}/">`)  
              .replace(new RegExp('{{base}}', 'g'), 'https://ulises-jeremias.github.io/user-experience-design/'),
            'utf8'
          )
        }
      },
      {
        from: commonPaths.favicon,
        to: commonPaths.outputServerPath,
      }
    ]),
  ]
}

module.exports = config
