const { resolve, join } = require('path')
const { readdirSync } = require('fs')

module.exports = async function(moduleOptions) {
  console.log('\x1b[32m\x1b[1m%s\x1b[0m', 'Starting module Ucase nuxt-plyr!')

  const options = {
    ...moduleOptions,
  }

  // add all of the initial plugins
  this.addPlugin({
    src: resolve(__dirname, 'components/index.js'),
    fileName: join('ucase-player', 'components/index.js'),
    ssr: false,
    options
  })

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/ucase-player)
  const path = resolve(__dirname, 'components')
  for (const file of readdirSync(path)) {
    this.addTemplate({
      src: resolve(path, file),
      fileName: join('ucase-player', 'components', file),
      options
    })
  }
}

module.exports.meta = require('../package.json')
