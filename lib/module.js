const path = require('path')

function nuxtPlyrModule (moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-plyr.js',
    ssr: false,
    options: moduleOptions
  })

  // sync 'UcasePlyr.vue' to revelant place in the nuxt build dir (.nuxt/)
  this.addTemplate({
    src: path.resolve(__dirname, 'NuxtPlyr.vue'),
    fileName: path.join('NuxtPlyr.vue'),
    options: moduleOptions
  })
}
module.exports = nuxtPlyrModule
module.exports.meta = require('../package.json')
