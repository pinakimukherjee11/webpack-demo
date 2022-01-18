const {mode} = require("webpack-nano/argV")
const {merge} = require("webpack-merge")
const parts = require('./webpack.part')

const commonconfig = merge([
  {entry: ['./src']},
  parts.page ({title: 'Demo'})
]);

const productionConfig = ([])
const developmentConfig = merge([ {entry: ["webpack-plugin-serve/client"] }, parts.devServer()])
const getConfig = (mode) => {
  switch(mode) {
    case 'production':
      return merge(commonconfig, productionConfig, {mode});
    case 'development':
      returnmerge(commonconfig, developmentConfig, {mode});
    default:
      throw new Error('Trying to use an Unknown mode, ${mode}')
  }
  
}

module.exports = {
    mode: 'development',
    watch: mode === 'development',
    entry: ["./src", "webpack-plugin-serve/client"],
    plugins: [new MiniHtmlWebpackPlugin({
      filename: 'index.html',
      context: {
        title: 'Webpack demo',
        // Optional, defaults to `{ lang: 'en' }`
        htmlAttributes: {
          lang: 'en'
        },
        head: 'Sample head',
        body: '',
        // Optional
        cssAttributes: {
          rel: 'preload',
          as: 'style'
        },
        jsAttributes: {
          defer: true
        },
        chunks: ['app']
      }
    }), new WebpackPluginServe({
      port: process.env.PORT || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true

    })
  ]
  };
  