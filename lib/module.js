const path = require('path')

function nuxtPlyrModule (moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-plyr.js',
    options: moduleOptions
  })
}
module.exports = nuxtPlyrModule
module.exports.meta = require('../package.json')
