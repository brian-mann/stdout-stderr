const tty = require('tty')
const supportsColor = require('supports-color')
const symbols = require('log-symbols')
const debug = require('debug')('stdout-stderr-testing')

debug('child debug output %o', { foo: 'bar', baz: true })

console.log('********** CHILD *************')

console.log('i am stdout 1')
console.error('i am stderror 1')

console.log('i am stdout 2')
console.error('i am stderror 2')

console.log('stdout isatty', tty.isatty(1))
console.log('stderr isatty', tty.isatty(2))

console.log('stdout colors?', supportsColor.stdout)
console.log('stderr colors?', supportsColor.stderr)

console.log(symbols.info, 'info')
console.log(symbols.success, 'success')
console.log(symbols.error, 'error')
console.log(symbols.warning, 'warning')
