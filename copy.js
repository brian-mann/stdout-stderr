const fse = require('fs-extra')
const path = require('path')

const appPath = path.resolve('app')
const destPath = path.resolve('node_modules', 'cypress', 'dist', 'Cypress', 'resources', 'app')

const nodeModules = path.resolve("node_modules")

Promise.all([
  fse.copy(appPath, destPath),
  fse.copy(path.join(nodeModules, "supports-color"), destPath.join("packages", "server", "node_modules"))
])
