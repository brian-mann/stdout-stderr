const fse = require('fs-extra')
const path = require('path')

const appPath = path.resolve('app')
const destPath = path.resolve('node_modules', 'cypress', 'dist', 'Cypress', 'resources', 'app')
// const destPath = path.resolve('node_modules', 'cypress', 'dist', 'Cypress.app', 'Contents', 'Resources', 'app')

const nodeModules = path.resolve("node_modules")

Promise.all([
  fse.copy(appPath, destPath),
  fse.copy(path.join(nodeModules, "supports-color"), path.join(destPath, "packages", "server", "node_modules", "supports-color")),
  fse.copy(path.join(nodeModules, "log-symbols"), path.join(destPath, "packages", "server", "node_modules", "log-symbols"))
])
