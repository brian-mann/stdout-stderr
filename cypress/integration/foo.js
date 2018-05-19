it('passes', () => {})

it('is pending')

it('fails', () => {
  throw new Error('fail whail')
})

Array(100).fill().forEach((n, i) => {
  it(`num: ${i+1}`, (done) => {
    setTimeout(done, 10)
  })
})
