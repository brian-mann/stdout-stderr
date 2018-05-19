const tty = require('tty')
const execa = require('execa')
const supportsColor = require('supports-color')
const symbols = require('log-symbols')

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

console.log('\n')

execa('node', ['child.js'], { stdio: 'inherit' })
.on('exit', () => {
  console.log('piped child process\n')

  const p = execa('node', ['child.js'])
  p.stdin.pipe(process.stdin)
  p.stdout.pipe(process.stdout)
  p.stderr.pipe(process.stderr)
  p.on('exit', () => {
    console.log('on data child process')

    const p2 = execa('node', ['child.js'])
    p2.stderr.on('data', (d) => {
      console.log(`got data: ${d}`)
    })
    p2.stdout.on('data', (d) => {
      console.log(`got data: ${d}`)
    })
    p2.on('exit', process.exit)
  })
})
