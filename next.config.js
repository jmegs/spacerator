const withCSS = require('@zeit/next-css')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = withCSS({
  exportPathMap: async function(defaultPathMap, { dir, outDir }) {
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'))
    return defaultPathMap
  }
})
