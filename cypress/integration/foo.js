it('passes', () => {})

it('is pending')

it('fails', () => {
  throw new Error('fail whail')
})

Array(10).fill().forEach((n, i) => {
  it(`num: ${i+1}`, (done) => {
    setTimeout(done, 10)
  })
})
