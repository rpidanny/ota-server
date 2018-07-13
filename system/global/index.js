const { app } = require('../../config')

global.xRootDir = app.rootPath
global.xWorkDir = app.rootPath

function init () {
  if (!global.appObjectStore) {
    global.appObjectStore = {
      logger: {}
    }
  }
}

module.exports = init()
